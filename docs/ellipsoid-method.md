# 타원체법

# 개요

**타원체법(ellipsoid method)** 은 $\mathbb R^n$ 의 볼록 집합 $K$ 가 비어 있는지 판정하고 비어 있지 않으면 그 점을 찾는 알고리즘이다. $K$ 를 담는 타원체를 하나 잡고, 중심이 $K$ 밖이면 중심을 지나는 반공간으로 자른 뒤 남은 반타원체를 담는 가장 작은 타원체로 바꾸는 일을 되풀이한다. 한 단계마다 부피가 $e^{-1/(2(n+1))}$ 배 이하로 줄어든다.

Khachiyan 은 이 방법으로 [선형계획법](linear-programming.md)이 입력 비트 수에 대해 다항 시간에 풀린다는 것을 처음 보였다.[^1] 알고리즘이 $K$ 에 대해 묻는 것은 "점 $a$ 가 $K$ 에 드는가, 들지 않으면 $K$ 와 $a$ 를 가르는 초평면은 무엇인가" 하나뿐이므로, 부등식이 지수적으로 많은 다면체에서도 이 질문에 다항 시간에 답하면 최적화가 다항 시간에 된다.

# 직관

수직선에서 구간 $\lbrack l,u\rbrack$ 안에 있는 미지의 점을 찾는 이분법은 가운데 점을 묻고 답에 따라 절반을 버린다. $n$ 차원에서 공 안의 볼록 집합을 찾을 때 공의 중심을 묻고 중심을 지나는 초평면의 한쪽을 버리면 반구가 남는다. 반구는 공이 아니므로 같은 질문을 되풀이하려면 반구를 다시 다루기 쉬운 모양으로 감싸야 한다.

평면의 단위 원판에서 $x_1\le 0$ 쪽 반원판을 감싸는 넓이가 가장 작은 타원은 중심이 $(-\tfrac13,0)$ 이고 반지름이 $x_1$ 방향으로 $\tfrac23$, $x_2$ 방향으로 $\tfrac{2}{\sqrt3}$ 이다. 넓이의 비는 $\tfrac23\cdot\tfrac{2}{\sqrt3}=\tfrac{4}{3\sqrt3}\approx 0.770$ 이다. 이분법처럼 절반이 되지는 않지만 매번 일정한 비율로 줄어들므로, 남은 넓이가 $K$ 의 넓이보다 작아지기 전에 중심이 $K$ 에 들어간다.

# 정의

## 타원체

양의 정부호 대칭행렬 $A$ 와 점 $a$ 에 대해

$$
E(A,a)=\lbrace x\in\mathbb R^n:\ (x-a)^{\mathsf T}A^{-1}(x-a)\le 1\rbrace
$$

를 중심이 $a$ 인 **타원체**라 한다. 부피는 $\sqrt{\det A}$ 에 단위 공의 부피를 곱한 것이다.

## 분리 오라클

볼록 집합 $K$ 의 **분리 오라클(separation oracle)** 은 점 $a$ 를 받아 $a\in K$ 이면 그렇다고 답하고, 아니면 모든 $x\in K$ 에서 $c^{\mathsf T}x\lt c^{\mathsf T}a$ 인 벡터 $c$ 를 돌려주는 절차다. $K=\lbrace x:Ax\le b\rbrace$ 이면 $a$ 가 어기는 부등식 하나의 행이 $c$ 다.

## 갱신 규칙

중심 $a$ 에서 분리 벡터 $c$ 를 받으면 $E(A,a)\cap\lbrace x:c^{\mathsf T}x\le c^{\mathsf T}a\rbrace$ 를 담는 최소 부피 타원체 $E(A',a')$ 로 바꾼다. $b=Ac/\sqrt{c^{\mathsf T}Ac}$ 로 두면

$$
a'=a-\frac{1}{n+1}b,\qquad A'=\frac{n^2}{n^2-1}\Bigl(A-\frac{2}{n+1}bb^{\mathsf T}\Bigr)
$$

이다($n\ge 2$).

```typescript
// K 가 반지름 R 인 공 안에 있다고 가정한다. 부피가 하한 아래로 내려가면 K 가 비었다고 답한다
function ellipsoid(sep: (a: number[]) => number[] | null, n: number, R: number, maxIter: number) {
  let a = new Array(n).fill(0);
  let A = identity(n).map((row) => row.map((v) => v * R * R));
  for (let k = 0; k < maxIter; k++) {
    const c = sep(a);
    if (c === null) return a;                       // 중심이 K 에 든다
    const Ac = matVec(A, c);
    const b = Ac.map((v) => v / Math.sqrt(dot(c, Ac)));
    a = a.map((v, i) => v - b[i] / (n + 1));
    A = A.map((row, i) => row.map((v, j) =>
      (n * n / (n * n - 1)) * (v - (2 / (n + 1)) * b[i] * b[j])));
  }
  return null;                                      // K 가 비었거나 부피가 너무 작다
}
```

# 성질

## 부피 감소

> **정리.** 갱신 규칙의 타원체는 반타원체를 담고
> $$
> \frac{\mathrm{vol}\thinspace E(A',a')}{\mathrm{vol}\thinspace E(A,a)}=\frac{n}{n+1}\Bigl(\frac{n^2}{n^2-1}\Bigr)^{(n-1)/2}\lt e^{-1/(2(n+1))}
> $$
> 이다.[^2]

증명의 요지. 아핀 변환은 부피의 비를 바꾸지 않으므로 $E(A,a)$ 를 단위 공, $c$ 를 $e_1$ 방향으로 옮긴다. 새 타원체는 $e_1$ 방향 반지름이 $\frac{n}{n+1}$, 나머지 방향 반지름이 $\frac{n}{\sqrt{n^2-1}}$ 이고, 반구의 경계 점들이 그 안에 드는 것을 직접 확인한다. 부피의 비는 반지름의 곱이다. 부등식은 $1+t\le e^t$ 를 $\frac{n}{n+1}=1-\frac{1}{n+1}$ 과 $\frac{n^2}{n^2-1}=1+\frac{1}{n^2-1}$ 에 쓰면 나온다. $\square$

$n=2$ 이면 비가 $\frac{4}{3\sqrt3}$ 로 직관 절의 계산과 같다.

## 반복 횟수

> **따름정리.** $K$ 가 반지름 $R$ 인 공에 들고 비어 있지 않을 때 반지름 $r$ 인 공을 포함하면, $2n(n+1)\log(R/r)$ 번 안에 중심이 $K$ 에 든다.

$N$ 번 뒤 타원체의 부피는 $e^{-N/(2(n+1))}R^n$ 에 단위 공의 부피를 곱한 값 이하이고, 타원체는 항상 $K$ 를 담으므로 이 값이 $r^n$ 에 단위 공의 부피를 곱한 값 이상이다. 두 부등식에서 $N\le 2n(n+1)\log(R/r)$ 이다.

## 선형계획법의 다항 시간

> **정리 (Khachiyan).** 유리수 자료로 주어진 선형계획 문제는 입력의 비트 수 $L$ 에 대해 다항 시간에 풀린다.[^1]

허용영역의 꼭짓점 좌표는 분자와 분모가 $2^{O(L)}$ 이하인 유리수이므로 $R=2^{O(L)}$ 으로 잡는다. 부등식의 우변을 $2^{-O(L)}$ 만큼 늘리면 원래 계가 허용해를 가질 때 반지름 $2^{-O(L)}$ 인 공을 포함하는 집합이 되고, 허용해가 없으면 늘린 계도 허용해가 없다. 따름정리로 반복이 $O(n^2L)$ 번이고, 각 단계의 수를 $O(L)$ 비트로 반올림해도 부피 감소가 유지된다. 최적화는 이분 탐색이나 쌍대 문제와 원 문제를 묶은 허용성 문제로 바꾼다.

## 분리와 최적화의 동치

> **정리 (Grötschel–Lovász–Schrijver).** 정보가 잘 주어진 다면체 족에서, 다항 시간 분리 오라클이 있는 것과 선형 목적함수의 최적화가 다항 시간에 되는 것은 동치다.[^3]

분리에서 최적화는 타원체법이다. 최적화에서 분리는 쌍대 다면체에 타원체법을 다시 쓰면 나온다. 부등식의 개수가 아니라 분리 오라클의 시간이 계산 복잡도를 정하므로, 부등식이 지수적으로 많은 다면체에서도 최적화가 다항 시간이다.

# 활용

- **[매칭 다면체](matching-polytope.md).** 홀수 집합 부등식은 지수적으로 많지만 최소 홀수 절단으로 분리되므로 최대 가중 매칭을 다항 시간에 푼다.
- **[완벽그래프](perfect-graphs.md)의 안정집합.** [Lovász 세타 함수](lovasz-theta.md)는 [반정부호 계획법](semidefinite-programming.md)의 값이고, 반정부호 제약의 분리 오라클은 고윳값 하나를 계산하는 것이다. 타원체법으로 세타 함수를 다항 시간에 계산하고, 완벽그래프에서 최대 안정집합의 크기를 얻는다.
- **부분모듈 함수의 최소화.** Lovász 확장의 최소화를 분리 문제로 바꾸어 다항 시간 알고리즘을 처음 얻었다.[^3]
- **실용 계산.** 반복 횟수가 $n^2L$ 규모이고 각 단계가 $O(L)$ 비트의 수치 정밀도를 요구한다. 선형계획 문제를 실제로 풀 때는 단체법이나 [내점법](interior-point-method.md)을 쓴다.

[^1]: L. G. Khachiyan, "A polynomial algorithm in linear programming", *Soviet Mathematics Doklady* **20** (1979), 191–194.
[^2]: Robert G. Bland, Donald Goldfarb, Michael J. Todd, "The ellipsoid method: a survey", *Operations Research* **29** (1981), 1039–1091.
[^3]: Martin Grötschel, László Lovász, Alexander Schrijver, *Geometric Algorithms and Combinatorial Optimization*, Springer, 1988.

# 연관 문서

## 선수지식

- [선형계획법](linear-programming.md)

## 더 알아보기

아직 연결한 문서가 없다.

#optimization #algorithms #complexity
