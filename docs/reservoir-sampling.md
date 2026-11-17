# 저수지 표집

# 개요

**저수지 표집(reservoir sampling)** 은 길이를 모르는 데이터 흐름을 한 번만 읽으면서, 원소 $k$ 개를 모든 원소가 같은 확률로 뽑히게 고르는 방법이다. 하루 동안 쌓이는 수억 줄의 접속 기록에서 무작위로 $100$ 줄을 고르려 할 때, 줄 수는 하루가 끝나야 알고 기록 전체를 메모리에 둘 수도 없다. 저수지 표집은 지금까지 고른 $k$ 개만 들고 있다가, $t$ 번째 줄이 오면 확률 $k/t$ 로 그 줄을 받아들여 들고 있던 것 하나와 바꾼다.

# 직관

$k=1$ 로 줄 하나만 고른다. 첫 줄은 무조건 들고, 둘째 줄이 오면 동전을 던져 확률 $1/2$ 로 바꾼다. 셋째 줄이 오면 확률 $1/3$ 로 바꾼다.

셋째 줄까지 읽은 뒤 각 줄이 남아 있을 확률을 계산한다. 첫 줄은 둘째와 셋째에서 모두 바뀌지 않아야 하므로 $\frac12\cdot\frac23=\frac13$ 이다. 둘째 줄은 둘째에서 받아들여지고 셋째에서 바뀌지 않아야 하므로 $\frac12\cdot\frac23=\frac13$ 이다. 셋째 줄은 받아들여질 확률 $\frac13$ 이다.

세 줄이 모두 $1/3$ 이다. $t$ 번째 줄을 확률 $1/t$ 로 받아들이면, 앞의 줄들이 남을 확률에 똑같이 $(t-1)/t$ 가 곱해져 모두 $1/t$ 로 맞추어진다.

# 정의

## 저수지 표집

길이 $n$ 을 미리 모르는 수열 $x_1,x_2,\dots$ 와 $k\ge 1$ 에 대해, 크기 $k$ 인 배열 $R$ 을 **저수지(reservoir)** 라 한다. **Algorithm R** 은 다음 절차다. $R$ 에 $x_1,\dots,x_k$ 를 넣는다. $t\gt k$ 인 각 $t$ 에 대해 $\lbrace 1,\dots,t\rbrace$ 에서 $j$ 를 균등하게 뽑고, $j\le k$ 이면 $R\lbrack j\rbrack$ 를 $x_t$ 로 바꾼다. Knuth 의 교재가 이 절차를 Waterman 의 것으로 소개했다[^1].

```typescript
function reservoirSample(stream: number[], k: number): number[] {
  const R: number[] = [];
  let t = 0;
  for (const x of stream) {
    t += 1;
    if (t <= k) {
      R.push(x);
    } else {
      const j = Math.floor(Math.random() * t); // 0 이상 t 미만
      if (j < k) R[j] = x;
    }
  }
  return R;
}
```

예. 직관 절의 $k=1$ 에서 $t=3$ 이면 $j$ 는 $0,1,2$ 가운데 하나이고 $j=0$ 일 때만 바꾸므로, 셋째 줄을 받아들이는 확률이 $1/3$ 이다.

## 가중 표집

원소마다 양의 가중치 $w_t$ 가 있으면, 각 원소에 $\lbrack 0,1\rbrack$ 의 균등한 수 $u_t$ 를 뽑아 순위 값 $u_t^{1/w_t}$ 를 주고 그 값이 큰 $k$ 개를 들고 있는다. 이것이 Efraimidis 와 Spirakis 의 **가중 저수지 표집(weighted reservoir sampling)** 이다[^2].

예. $k=1$ 이고 가중치가 $1$ 과 $2$ 인 두 원소이면 둘째가 뽑힐 확률은 $2/3$ 이다.

# 성질

## 균등성

$t\ge k$ 개를 읽은 뒤 저수지는 $x_1,\dots,x_t$ 의 크기 $k$ 인 부분집합 가운데 하나를 균등하게 담는다. 특히 각 $x_i$ 가 저수지에 있을 확률은 $k/t$ 다[^1].

*증명의 요지.* $t$ 에 대한 귀납법이다. $t=k$ 이면 저수지가 $\lbrace x_1,\dots,x_k\rbrace$ 이다. $t$ 에서 성립한다고 하자. $x_{t+1}$ 은 확률 $k/(t+1)$ 로 들어가고, 이미 있던 원소는 바뀔 확률이 $\frac{k}{t+1}\cdot\frac1k$ 이므로 남을 확률은 다음과 같다.

$$
\frac{k}{t}\cdot\Bigl(1-\frac{1}{t+1}\Bigr)=\frac{k}{t+1}
$$

부분집합 전체의 균등성도 같은 계산으로 따라 나온다. 크기 $k$ 인 부분집합 하나가 나올 확률은 $1/\binom tk$ 에서 $1/\binom{t+1}{k}$ 로 옮겨 간다.

## 교체 횟수

$n$ 개를 읽는 동안 저수지를 바꾸는 횟수의 기댓값은 다음과 같다.

$$
\sum_{t=k+1}^{n}\frac{k}{t}=k\bigl(H_n-H_k\bigr)\approx k\ln\frac nk
$$

여기서 $H_m$ 은 다음 조화수다.

$
H_m=1+\frac12+\cdots+\frac1m
$

다음 교체가 몇 번째 원소에서 일어나는지를 한 번에 뽑으면 난수를 원소마다 뽑지 않고 이 횟수만큼만 뽑는다. Vitter 의 Algorithm Z 가 이 방법이다[^3].

## 메모리의 하한

흐름을 한 번 읽는 방법은 마지막에 들고 있는 원소만 내놓을 수 있으므로, 크기 $k$ 인 표본을 내놓으려면 원소를 $k$ 개 이상 들고 있어야 한다. 저수지 표집은 정확히 $k$ 개를 들고 있으므로 이 하한과 같다.

# 활용

- 기록과 측정값의 표본. 서버 접속 기록, 센서 측정값처럼 끝없이 들어오는 흐름에서 고정된 메모리로 무작위 표본을 유지한다.
- 데이터베이스 질의의 근사. 표를 한 번 훑으며 표본을 뽑아 평균과 비율을 추정한다. 오차는 [중심극한정리](central-limit-theorem.md)로 잡는다.
- 분산 처리. 여러 기계가 각자 저수지를 만들고, 각 저수지가 본 원소 수에 비례하는 확률로 합치면 전체 흐름의 균등 표본이 된다.

[^1]: D. E. Knuth, *The Art of Computer Programming*, Vol. 2, 3rd ed., Addison-Wesley, 1997, Section 3.4.2.
[^2]: P. S. Efraimidis, P. G. Spirakis, "Weighted random sampling with a reservoir", Information Processing Letters 97 (2006), 181–185.
[^3]: J. S. Vitter, "Random sampling with a reservoir", ACM Transactions on Mathematical Software 11 (1985), 37–57.

# 연관 문서

## 선수지식

- [유한 확률 공간](probability.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algorithms #probability #data_structures
