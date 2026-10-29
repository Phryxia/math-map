# Fibonacci 수

# 개요

**Fibonacci 수(Fibonacci number)** 는 앞의 두 항을 더해 다음 항을 만드는 수열 $0,1,1,2,3,5,8,13,\dots$ 의 항이다. 한 번에 한 칸이나 두 칸씩 올라 계단 $n$ 칸을 오르는 방법의 수가 이 수열을 따른다. 마지막 걸음이 한 칸인 경우와 두 칸인 경우로 나누면 $n-1$ 칸과 $n-2$ 칸을 오르는 방법의 수를 더한 값이 나온다. 이 점화식을 풀면 $n$ 번째 항이 앞의 항 없이 황금비의 거듭제곱으로 바로 적힌다.

# 직관

Fibonacci 수는 $F_0=0$, $F_1=1$, $F_n=F_{n-1}+F_{n-2}$ 로 정해지는 수열 $0,1,1,2,3,5,8,13,\dots$ 의 항이다. 닫힌 꼴은 황금비 $\varphi=(1+\sqrt 5)/2$ 로 $F_n=(\varphi^n-\psi^n)/\sqrt 5$ 이고, $\psi=(1-\sqrt 5)/2$ 다.

[생성함수](generating-functions.md)가 $x/(1-x-x^2)$ 인 수열이고, 닫힌 꼴은 그 부분분수 분해에서 나온다.

길이 $n$ 인 띠를 길이 $1$ 인 타일과 길이 $2$ 인 타일로 빈틈없이 덮는 방법의 수를 $a_n$ 이라 한다. 길이 $1$ 은 $1$ 가지, 길이 $2$ 는 $2$ 가지다. 길이 $3$ 은 $1+1+1$, $1+2$, $2+1$ 로 $3$ 가지다.

마지막 타일만 보면 길이 $1$ 이거나 길이 $2$ 다. 길이 $1$ 이면 앞의 $n-1$ 칸을 덮는 방법이 $a_{n-1}$ 가지이고, 길이 $2$ 이면 앞의 $n-2$ 칸을 덮는 방법이 $a_{n-2}$ 가지다. 그래서 $a_n=a_{n-1}+a_{n-2}$ 이고, 수를 이어 쓰면 $1,2,3,5,8,13,\dots$ 이다. 이 수가 $a_n=F_{n+1}$ 이다.

이웃한 두 항의 비는 $8/5=1.6$, $13/8=1.625$, $21/13\approx 1.615$ 로 한 값에 모인다. 비가 $r$ 로 모이면 $a_n=a_{n-1}+a_{n-2}$ 를 $a_{n-2}$ 로 나눠 $r^2=r+1$ 이 나오고, 양수 근이 $\varphi\approx 1.618$ 이다.

# 정의

## Fibonacci 수열

**Fibonacci 수열(Fibonacci sequence)** 은 다음 점화식으로 정해진다.

$$
F_0=0,\qquad F_1=1,\qquad F_n=F_{n-1}+F_{n-2}\quad(n\ge 2)
$$

점화식을 거꾸로 쓰면 음의 첨자로 늘어나고 $F_{-n}=(-1)^{n+1}F_n$ 이다.

## 황금비

**황금비(golden ratio)** $\varphi$ 는 $x^2=x+1$ 의 양수 근이다. 다른 근은 $\psi=1-\varphi=-1/\varphi$ 다.

$$
\varphi=\frac{1+\sqrt 5}{2}\approx 1.618,\qquad \psi=\frac{1-\sqrt 5}{2}\approx -0.618
$$

## 행렬 꼴

점화식은 [행렬](matrices.md) 곱 $\begin{pmatrix}F_{n+1}\cr F_n\end{pmatrix}=\begin{pmatrix}1&1\cr 1&0\end{pmatrix}\begin{pmatrix}F_n\cr F_{n-1}\end{pmatrix}$ 이다. 거듭 쓰면 다음이 나온다.

$$
\begin{pmatrix}1&1\cr 1&0\end{pmatrix}^n=\begin{pmatrix}F_{n+1}&F_n\cr F_n&F_{n-1}\end{pmatrix}\qquad(n\ge 1)
$$

# 성질

## Binet 공식

정리. 모든 정수 $n\ge 0$ 에 대해 다음이 성립한다. 이것을 **Binet 공식(Binet's formula)** 이라 한다.

$$
F_n=\frac{\varphi^n-\psi^n}{\sqrt 5}
$$

증명의 요지. $\varphi^2=\varphi+1$ 이므로 $\varphi^n=\varphi^{n-1}+\varphi^{n-2}$ 이고 $\psi^n$ 도 같다. 그래서 우변이 Fibonacci 점화식을 만족하고, $n=0$ 에서 $0$, $n=1$ 에서 $(\varphi-\psi)/\sqrt 5=1$ 이다.

$\vert\psi\vert\lt 1$ 이므로 $\vert\psi^n/\sqrt 5\vert\lt 1/2$ 이다. 따라서 $F_n$ 은 $\varphi^n/\sqrt 5$ 에 가장 가까운 정수이고, $F_n$ 은 $\varphi^n$ 의 비율로 자란다.

## 항등식

행렬 꼴의 행렬식과 곱에서 두 항등식이 나온다.

- **Cassini 항등식(Cassini's identity)** $F_{n+1}F_{n-1}-F_n^2=(-1)^n$. 왼쪽 행렬의 행렬식이 $-1$ 이므로 $n$ 제곱의 행렬식은 $(-1)^n$ 이다.
- 덧셈 공식 $F_{m+n}=F_mF_{n+1}+F_{m-1}F_n$. $m+n$ 제곱을 $m$ 제곱과 $n$ 제곱의 곱으로 쓰고 오른쪽 위 성분을 비교한다.

덧셈 공식에서 $m=n$, $m=n+1$ 로 두면 다음이 나온다.

$$
F_{2n}=F_n(2F_{n+1}-F_n),\qquad F_{2n+1}=F_{n+1}^2+F_n^2
$$

## 최대공약수

정리. 양의 정수 $m$, $n$ 에 대해 $\gcd(F_m,F_n)=F_{\gcd(m,n)}$ 이다.

증명의 요지. Cassini 항등식에서 $\gcd(F_n,F_{n+1})=1$ 이다. 덧셈 공식에서 $F_{m+n}\equiv F_mF_{n+1}\pmod{F_n}$ 이고 $F_{n+1}$ 은 $F_n$ 과 서로소이므로 $\gcd(F_{m+n},F_n)=\gcd(F_m,F_n)$ 이다. 첨자에 [유클리드 알고리즘](euclidean-algorithm.md)을 그대로 따라가면 $F_{\gcd(m,n)}$ 에 닿는다.

$m\ge 3$ 이면 $F_m\mid F_n$ 과 $m\mid n$ 이 동치다. 특히 $n\ne 4$ 일 때 $F_n$ 이 소수이면 $n$ 이 소수다.

## Zeckendorf 정리

정리. 모든 양의 정수는 서로 이웃하지 않는 Fibonacci 수 $F_k$ $(k\ge 2)$ 의 합으로 단 한 가지로 나타난다. 이것을 **Zeckendorf 정리(Zeckendorf's theorem)** 라 한다[^1].

증명의 요지. 존재는 $N$ 이하인 가장 큰 $F_k$ 를 빼는 탐욕적 방법으로 보인다. $F_k\le N\lt F_{k+1}$ 이면 $N-F_k\lt F_{k-1}$ 이므로 다음에 빼는 수는 $F_{k-2}$ 이하이고 이웃하지 않는다. 유일성은 서로 이웃하지 않고 가장 큰 항이 $F_k$ 인 합이 $F_{k+1}-1$ 이하라는 것에서 나온다. $100=89+8+3$ 이 그 예다.

## 빠른 계산

$F_{2n}$ 과 $F_{2n+1}$ 의 식을 쓰면 $(F_n,F_{n+1})$ 에서 $(F_{2n},F_{2n+1})$ 을 곱 세 번으로 구한다. $n$ 의 이진 자릿수를 위에서부터 읽으며 이것을 되풀이하면 $F_n$ 을 $O(\log n)$ 번의 곱셈으로 구한다.

```typescript
function fib(n: number): [bigint, bigint] {
  if (n === 0) return [0n, 1n];
  const [a, b] = fib(Math.floor(n / 2));
  const c = a * (2n * b - a);
  const d = a * a + b * b;
  return n % 2 === 0 ? [c, d] : [d, c + d];
}
```

`fib(n)` 의 값은 $(F_n,F_{n+1})$ 이다.

# 활용

- 유클리드 알고리즘의 반복 횟수. 나눗셈 $k$ 번이 드는 가장 작은 입력은 연속한 두 Fibonacci 수 $(F_{k+2},F_{k+1})$ 이고, 이때 몫은 매번 $1$ 이다. 그래서 작은 쪽 수가 $b$ 이면 나눗셈 횟수는 $\log_\varphi b+1$ 이하이고, 이것이 Lamé 정리(Lamé's theorem)다[^2].
- [균형 이진 탐색 트리](balanced-binary-search-trees.md). 높이 $h$ 인 AVL(Adelson-Velsky–Landis) 트리의 최소 노드 수는 $F_{h+3}-1$ 이고, 높이가 $\log_\varphi n$ 정도로 묶인다.
- [Fibonacci 힙](fibonacci-heaps.md). 차수가 $k$ 인 마디의 부분트리에는 마디가 $F_{k+2}\ge\varphi^k$ 개 이상 있어 차수가 $O(\log n)$ 이다.
- [유한형 이동](shifts-of-finite-type.md). $1$ 이 연달아 나오지 않는 길이 $n$ 인 $0$, $1$ 문자열은 $F_{n+2}$ 개이고, 그 이동의 위상 엔트로피는 $\log\varphi$ 다.
- [Hilbert 의 10번 문제](hilberts-tenth-problem.md). Matiyasevich 의 1970 년 증명은 관계 $v=F_{2u}$ 가 Diophantine 임을 보여 거듭제곱이 Diophantine 임을 이끌었다[^3].

[^1]: E. Zeckendorf, "Représentation des nombres naturels par une somme de nombres de Fibonacci ou de nombres de Lucas", Bulletin de la Société Royale des Sciences de Liège 41 (1972), 179–182.
[^2]: D. E. Knuth, *The Art of Computer Programming, Vol. 1: Fundamental Algorithms*, 3rd ed., Addison-Wesley, 1997, §1.2.8. Vol. 2, 3rd ed., 1997, §4.5.3.
[^3]: Yu. V. Matiyasevich, "Enumerable sets are Diophantine", Soviet Mathematics Doklady 11 (1970), 354–358.

# 연관 문서

## 선수지식

- [생성함수](generating-functions.md)

## 더 알아보기

아직 연결한 문서가 없다.

#combinatorics #number_theory #algorithms
