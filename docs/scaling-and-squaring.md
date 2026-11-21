# 척도 조정과 제곱 방법

# 개요

**척도 조정과 제곱 방법(scaling and squaring method)** 은 [행렬 지수](matrix-exponential.md) $e^A$ 를 계산할 때, $A$ 를 $2^s$ 로 나누어 작게 만든 행렬의 지수를 다항식이나 유리함수로 어림한 뒤 그 결과를 $s$ 번 제곱하는 방법이다. 평면에서 $8$ 라디안 돌리는 행렬의 지수를 거듭제곱급수로 바로 더하면, 항이 $400$ 을 넘게 커졌다가 줄어들어 마흔 개가 넘는 항을 더해야 하고 큰 항끼리의 상쇄로 자릿수도 잃는다. 척도 조정과 제곱 방법은 $1$ 라디안 회전을 짧은 어림으로 계산하고 그것을 세 번 제곱해 $8$ 라디안 회전을 얻는다.

# 직관

$J$ 를 다음과 같이 둔다.

$$
J=\begin{pmatrix}0&-1\cr 1&0\end{pmatrix}
$$

$e^{\theta J}$ 는 각 $\theta$ 만큼 도는 회전 행렬이고, 성분은 $\cos\theta$ 와 $\pm\sin\theta$ 다. $A=8J$ 의 지수를 급수 $\sum\_n A^n/n!$ 로 더하면 $n$ 번째 항의 크기가 $8^n/n!$ 이다. 이 크기는 $n=8$ 에서 약 $416$ 까지 커진 뒤 줄어, $n=46$ 에 가서야 $10^{-16}$ 아래로 내려간다.

더한 결과의 성분 $\cos 8\approx -0.1455$ 는 $416$ 같은 크기의 항들이 서로 지워진 나머지다. 배정도 계산에서 $416$ 에 붙는 반올림 오차는 $416\times 10^{-16}$ 정도이고, 이것이 $0.1455$ 에 비해 약 $3\times 10^{-13}$ 의 상대 오차가 된다.

$8$ 라디안 회전은 $1$ 라디안 회전을 여덟 번 한 것이고, 여덟 번은 두 번을 세 번 거듭한 것이다. 그래서 $e^{8J}=\bigl(e^{J}\bigr)^{8}$ 을 $e^J$ 의 제곱을 세 번 해 얻는다. $e^J$ 의 급수는 항 크기가 $1/n!$ 이라 처음부터 줄고, $n=19$ 에서 $10^{-16}$ 아래로 내려가며, 가장 큰 항이 $1$ 이라 상쇄로 잃는 자릿수가 없다.

$e^J$ 를 다항식 대신 두 다항식의 비로 어림하면 항이 더 적게 든다. 수 $x=1$ 에서 $e^x$ 의 급수를 $x^4$ 의 항까지 더한 값과, $x^4$ 의 항까지 급수와 맞는 다음 비의 값을 견준다.

$$
\begin{aligned}
1+x+\frac{x^2}{2}+\frac{x^3}{6}+\frac{x^4}{24}&=2.7083\cr
\frac{1+x/2+x^2/12}{1-x/2+x^2/12}&=2.7143
\end{aligned}
$$

$e=2.71828$ 에 비 쪽이 더 가깝다.

# 정의

## Padé 근사

$e^x$ 의 $\lbrack m/m\rbrack$ **Padé 근사(Padé approximant)** 는 차수가 $m$ 이하인 두 다항식의 비 $r\_m=p\_m/q\_m$ 가운데 $e^x-r\_m(x)=O(x^{2m+1})$ 인 것이다. 계수는 다음으로 정해진다.

$$
p\_m(x)=\sum\_{j=0}^m\frac{(2m-j)!\thinspace m!}{(2m)!\thinspace j!\thinspace(m-j)!}x^j,\qquad q\_m(x)=p\_m(-x)
$$

$m=2$ 이면 $p\_2(x)=1+x/2+x^2/12$ 이고, 직관 절의 비가 $r\_2$ 다. 행렬에서는 $r\_m(A)=q\_m(A)^{-1}p\_m(A)$ 로 쓴다.

## 척도 조정과 제곱

차수 $m$ 과 정수 $s\ge 0$ 에 대해 다음 계산을 척도 조정과 제곱 방법이라 한다.[^1][^2]

$$
e^A\approx r\_m\bigl(2^{-s}A\bigr)^{2^s}
$$

$s$ 는 $\Vert 2^{-s}A\Vert$ 가 차수 $m$ 에 맞춘 기준값 $\theta\_m$ 이하가 되는 가장 작은 정수로 고른다.

```javascript
// A: n×n 행렬, m: Padé 차수, thetaM: 차수 m 의 기준값
function expm(A, m, thetaM) {
  const s = Math.max(0, Math.ceil(Math.log2(norm1(A) / thetaM)));
  const B = scale(A, 2 ** -s);
  let X = solve(padeQ(B, m), padeP(B, m)); // r_m(B) = q_m(B)^{-1} p_m(B)
  for (let i = 0; i < s; i++) X = matmul(X, X);
  return X;
}
```

직관 절의 $A=8J$ 는 $1$-노름이 $8$ 이고, 기준값을 $1$ 로 두면 $s=3$ 이다.

# 성질

## 후진 오차

$\Vert 2^{-s}A\Vert\le\theta\_m$ 이면 $r\_m(2^{-s}A)=e^{2^{-s}A+F}$ 를 만족하는 $F$ 가 존재하고 $A$ 와 교환한다. 이것을 $2^s$ 번 거듭하면 다음이 된다.[^2]

$$
r\_m\bigl(2^{-s}A\bigr)^{2^s}=e^{A+\Delta A},\qquad \Delta A=2^sF
$$

Higham 은 $\Vert\Delta A\Vert/\Vert A\Vert$ 가 배정도의 단위 반올림 $2^{-53}$ 이하가 되는 $\theta\_m$ 을 차수마다 계산했다.[^2] 그 결과는 정확한 행렬 $A+\Delta A$ 의 지수와 같고, 남은 오차는 [행렬 지수의 Fréchet 미분](matrix-exponential-frechet-derivative.md)이 정하는 조건수만큼 커진다.

## 차수와 비용

$p\_m(A)$ 와 $q\_m(A)$ 는 같은 거듭제곱 $A^2,A^4,\dots$ 을 함께 써서 행렬 곱 몇 번으로 계산된다. Higham 의 판에서 $m=13$ 은 행렬 곱 여섯 번과 일차방정식 풀이 한 번으로 $r\_{13}$ 을 주고, $\theta\_{13}\approx 5.37$ 이다.[^2] 행렬의 노름이 크면 차수를 올리는 것보다 $s$ 를 하나 늘리는 것이 싸다. 제곱 한 번은 행렬 곱 한 번이다.

## 과잉 척도 조정

$\Vert A\Vert$ 가 고윳값보다 훨씬 큰 정규가 아닌 행렬에서는 노름으로 고른 $s$ 가 필요보다 커서, 제곱하는 동안 반올림 오차가 쌓인다. Al-Mohy 와 Higham 은 $\Vert A^k\Vert^{1/k}$ 로 $s$ 를 고르고 정확한 대각 성분을 제곱 단계마다 다시 넣어 이 오차를 줄였다.[^3]

## 다른 방법과의 비교

Moler 와 Van Loan 은 행렬 지수를 계산하는 열아홉 가지 방법을 견주고, 고윳값 분해를 쓰는 방법은 고유벡터 행렬의 조건수가 클 때 오차가 커진다고 정리했다.[^1] 척도 조정과 제곱 방법은 고유벡터를 쓰지 않으므로 이 문제가 없고, 밀집 행렬에서 표준적인 방법이다.

# 활용

- 수치 소프트웨어의 행렬 지수 함수. 밀집 행렬의 $e^A$ 를 계산하는 표준 루틴이 Padé 근사와 척도 조정과 제곱을 쓴다.
- 선형 미분방정식과 제어. $x'=Ax$ 의 한 걸음 전이 $e^{hA}$ 와 이산화한 상태공간 모형의 행렬을 계산한다.
- [연속시간 Markov 연쇄](continuous-time-markov-chains.md)의 전이행렬 $e^{tQ}$ 를 계산한다.
- 대각 블록이 $A$, $A$ 이고 오른쪽 위 블록이 $E$, 왼쪽 아래 블록이 $0$ 인 블록 행렬에 적용해 Fréchet 미분 $L(A,E)$ 를 함께 계산한다.[^3]

[^1]: C. Moler, C. Van Loan, "Nineteen dubious ways to compute the exponential of a matrix, twenty-five years later", *SIAM Review* 45 (2003), 3–49.

[^2]: N. J. Higham, "The scaling and squaring method for the matrix exponential revisited", *SIAM Journal on Matrix Analysis and Applications* 26 (2005), 1179–1193.

[^3]: A. H. Al-Mohy, N. J. Higham, "A new scaling and squaring algorithm for the matrix exponential", *SIAM Journal on Matrix Analysis and Applications* 31 (2009), 970–989.

# 연관 문서

## 선수지식

- [행렬 지수](matrix-exponential.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #linear_algebra #algorithms
