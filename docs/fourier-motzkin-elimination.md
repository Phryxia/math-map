# Fourier–Motzkin 소거법

# 개요

**Fourier–Motzkin 소거법(Fourier–Motzkin elimination)** 은 일차 부등식 연립에서 변수 하나를 지우고, 남은 변수만으로 된 부등식 연립을 얻는 방법이다. 부등식 $y\ge x$, $y\ge1-x$, $y\le2$ 가 주어졌을 때 이 셋을 모두 만족하는 $y$ 가 있게 하는 $x$ 의 범위를 묻는 문제가 이 꼴이다. 평면에서 보면 세 부등식이 자르는 삼각형을 $x$ 축에 비춘 그림자를 구하는 문제다.

이 방법은 $y$ 의 아래 한계마다 위 한계와 짝지어 $y$ 가 없는 부등식을 만들고, 그렇게 얻은 $-1\le x\le2$ 가 답이다.

# 직관

연립방정식에서는 [Gauss 소거법](gaussian-elimination.md)으로 한 식을 $y$ 에 대해 풀어 다른 식에 넣으면 $y$ 가 사라진다. 부등식에서는 $y\ge x$ 를 $y=x$ 로 바꿔 넣을 수 없으므로 이 방법이 통하지 않는다.

대신 $y$ 에 대한 한계를 모은다. $y\ge x$ 와 $y\ge1-x$ 는 아래 한계이고 $y\le2$ 는 위 한계다. 아래 한계 둘 가운데 큰 것이 위 한계 이하이면 그 사이에서 $y$ 를 고를 수 있고, 아니면 고를 수 없다.

큰 아래 한계가 위 한계 이하라는 것은 아래 한계 하나하나가 위 한계 이하라는 것과 같다. 그래서 $x\le2$ 와 $1-x\le2$ 두 부등식이 나오고, 이것이 $-1\le x\le2$ 다. $x=2$ 이면 $y=2$ 가 셋을 모두 만족하고, $x=3$ 이면 $y\ge3$ 과 $y\le2$ 가 부딪혀 $y$ 가 없다.

# 정의

## 소거 단계

부등식 $m$ 개의 연립 $\sum\_{k=1}^n a\_{ik}x\_k\le b\_i$ 에서 변수 $x\_n$ 을 지운다. $a\_{in}\gt0$ 인 $i$ 의 모임을 $I\_+$, $a\_{in}\lt0$ 인 모임을 $I\_-$, $a\_{in}=0$ 인 모임을 $I\_0$ 으로 나눈다. $I\_+$ 의 부등식은 $x\_n$ 의 위 한계를, $I\_-$ 의 부등식은 아래 한계를 준다.

$i\in I\_+$, $j\in I\_-$ 의 짝마다 부등식 $i$ 에 $-a\_{jn}$ 을, 부등식 $j$ 에 $a\_{in}$ 을 곱해 더한다. 두 배수가 모두 양수이므로 부등호 방향이 유지되고, $x\_n$ 의 계수는 $-a\_{jn}a\_{in}+a\_{in}a\_{jn}=0$ 이 된다. 이렇게 얻은 $\vert I\_+\vert\cdot\vert I\_-\vert$ 개의 부등식과 $I\_0$ 의 부등식을 모은 연립을 $x\_n$ 을 **소거한 연립(eliminated system)** 이라 한다.

개요의 예를 $x-y\le0$, $-x-y\le-1$, $y\le2$ 로 적으면 $I\_-$ 가 앞의 둘, $I\_+$ 가 마지막 하나다. 짝 두 개에서 $x\le2$ 와 $-x\le1$ 이 나온다.

## 알고리즘

변수를 차례로 지우면서 각 단계에서 소거 단계를 그대로 적용한다.

```javascript
function eliminate(rows, n) {
  // rows: [{ a: number[], b: number }] for a·x <= b, removes variable n
  const pos = rows.filter((r) => r.a[n] > 0);
  const neg = rows.filter((r) => r.a[n] < 0);
  const out = rows.filter((r) => r.a[n] === 0);
  for (const p of pos) {
    for (const q of neg) {
      const s = -q.a[n];
      const t = p.a[n];
      out.push({
        a: p.a.map((v, k) => s * v + t * q.a[k]),
        b: s * p.b + t * q.b,
      });
    }
  }
  return out;
}
```

모든 변수를 지우면 $0\le c$ 꼴의 부등식만 남는다. 원래 연립에 해가 있는 것과 남은 $c$ 가 모두 $0$ 이상인 것이 동치다.

# 성질

## 사영 정리

정리. $x\_1,\dots,x\_{n-1}$ 이 $x\_n$ 을 소거한 연립을 만족하는 것과, 어떤 $x\_n$ 이 있어 $(x\_1,\dots,x\_n)$ 이 원래 연립을 만족하는 것은 동치다.

증명의 요지. 원래 연립의 해는 각 짝의 양수 결합도 만족하므로 한쪽은 바로 나온다. 거꾸로 소거한 연립을 만족하면 각 $i\in I\_+$ 의 위 한계가 각 $j\in I\_-$ 의 아래 한계 이상이다. 그래서 아래 한계의 최댓값이 위 한계의 최솟값 이하이고, 그 사이의 $x\_n$ 이 원래 연립을 만족한다. $I\_+$ 나 $I\_-$ 가 비어 있으면 $x\_n$ 을 충분히 작거나 크게 잡는다.

이 정리로 다면체를 좌표 부분공간에 사영한 상이 다시 유한 개 부등식의 해집합이다. [볼록 다면체](convex-polytopes.md)의 Minkowski–Weyl 정리의 증명이 이것을 쓴다.

## Farkas 보조정리의 증명

소거한 연립의 각 부등식은 원래 부등식에 음 아닌 수를 곱해 더한 것이다. 모든 변수를 지운 뒤 $0\le c$ 꼴에서 $c\lt0$ 인 것이 있으면, 그 부등식을 만든 음 아닌 배수 $y$ 가 $y^{\mathsf T}A=0$, $y^{\mathsf T}b\lt0$ 을 만족한다. 해가 없으면 이런 $y$ 가 있다는 이 결론이 [Farkas 보조정리](farkas-lemma.md)의 한 형태다[^1].

$x\le1$, $-x\le-2$ 는 $x$ 를 지우면 두 부등식을 그대로 더한 $0\le-1$ 이 남는다. 배수 $y=(1,1)$ 이 해가 없다는 증거다.

## 부등식 수의 증가

한 번의 소거로 부등식 $m$ 개가 최대 $m^2/4$ 개가 된다. 변수 $k$ 개를 지우면 최악의 경우 $(m/2)^{2^k}$ 꼴로 늘어난다. 늘어난 부등식의 대부분은 다른 부등식에서 따라 나오는 군더더기이고, 각 부등식을 만든 원래 부등식의 수가 지운 변수 수보다 하나 많은 수를 넘으면 버려도 된다는 Chernikov 규칙(Chernikov's rule)으로 일부를 미리 걸러낸다[^2].

## 정수해

정수해를 묻는 연립에서는 소거한 연립이 정수 $x\_n$ 의 존재를 보장하지 않는다. $1\le 2x\le1$ 을 만족하는 정수 $x$ 는 없지만 $x$ 를 지운 연립 $1\le1$ 은 참이다. 정수 연립에서는 위 한계와 아래 한계 사이의 간격까지 따지는 변형이 필요하고, Pugh 의 Omega 검사(Omega test)가 그 예다[^3].

# 활용

- [선형계획법](linear-programming.md)의 실현가능성 판정. 변수가 적은 연립에서는 모든 변수를 지워 남은 상수 부등식으로 해의 존재를 판정한다.
- [추상해석](abstract-interpretation.md). 프로그램 변수 사이의 일차 부등식을 추적하는 다면체 추상 영역에서, 대입 뒤 옛 변수를 지우는 연산이 이 소거다.
- 컴파일러의 의존성 분석. 배열 첨자가 같은 원소를 가리키는 반복 횟수가 있는지를 정수 연립의 해 존재로 바꾸고 Omega 검사로 판정한다[^3].

[^1]: A. Schrijver, *Theory of Linear and Integer Programming*, Wiley, 1986, 12 장 2 절.
[^2]: S. N. Chernikov, "Contraction of systems of linear inequalities", *Soviet Mathematics Doklady* 1 (1960), 296–299.
[^3]: W. Pugh, "The Omega test: a fast and practical integer programming algorithm for dependence analysis", *Proceedings of Supercomputing '91*, ACM, 1991, 4–13.

# 연관 문서

## 선수지식

- [Gauss 소거법](gaussian-elimination.md)
- [Farkas 보조정리](farkas-lemma.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #linear_algebra #algorithms
