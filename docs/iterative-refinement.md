# 반복 개선

# 개요

**반복 개선(iterative refinement)** 은 연립일차방정식의 근사해를 방정식에 넣어 남는 차이를 구하고, 그 차이를 우변으로 한 방정식을 풀어 근사해를 고치는 일을 되풀이하는 방법이다. $3x+y=4$, $x+3y=5$ 를 유효숫자 세 자리로 풀면 참값 $(0.875,\ 1.375)$ 대신 $(0.877,\ 1.37)$ 이 나온다. 반복 개선은 처음 풀 때 만든 분해를 그대로 다시 쓰고 남는 차이만 정확히 계산해, 이 방정식에서는 두 번 고친 뒤 참값에 이른다.

# 직관

$3x+y=4$, $x+3y=5$ 를 [후방 오차 분석](backward-error-analysis.md)의 유효숫자 세 자리 계산으로 푼다. 둘째 식에서 첫째 식의 $1/3$ 배를 빼는데, $1/3$ 은 $0.333$ 이 된다. $y$ 의 계수는 $3-0.333=2.667$ 이 $2.67$ 로, 우변은 $5-1.332=3.668$ 이 $3.67$ 로 반올림된다. $y=3.67/2.67$ 은 $1.37$, $x=(4-1.37)/3$ 은 $0.877$ 이다.

이 답을 원래 식에 넣으면 좌변이 $3(0.877)+1.37=4.001$, $0.877+3(1.37)=4.987$ 이다. 우변에서 빼면 $r=(-0.001,\ 0.013)$ 이 남는다. 이 계산은 자릿수를 줄이지 않고 정확히 한다. 참값에서 답을 뺀 오차 $e$ 를 원래 식의 좌변에 넣으면 정확히 $r$ 이 나오므로, 우변을 $r$ 로 바꾼 같은 방정식을 풀면 오차가 나온다.

우변이 $r$ 인 방정식은 처음과 같은 소거 계수 $0.333$ 과 $2.67$ 로 세 자리 계산을 해서 푼다. 답은 $d=(-0.00199,\ 0.00498)$ 이고, 이것을 더하면 $(0.87501,\ 1.37498)$ 이다. 오차가 $0.002$ 규모에서 $0.00002$ 규모로 줄었다.

한 번 더 하면 남는 차이가 $(-0.00001,\ 0.00005)$, 고칠 양이 $(-0.00001,\ 0.00002)$ 이고 답은 $(0.875,\ 1.375)$ 이다. 소거는 세 자리로만 했지만, 남는 차이를 정확히 계산했으므로 답은 세 자리보다 정확하다. 한 번 고칠 때마다 오차가 약 $1/100$ 배가 되었다.

# 정의

[행렬 분해](matrix-factorizations.md)의 LU 분해(lower–upper decomposition) $A\approx\hat L\hat U$ 를 정밀도 $u_f$ 로 구해 둔다. $\hat x_0$ 은 $\hat L\hat U\hat x_0=b$ 를 정밀도 $u_f$ 로 푼 값이다. $k=0,1,2,\dots$ 에서 다음을 되풀이하는 방법이 **반복 개선** 이다.

1. **잔차(residual)** $r_k=b-A\hat x_k$ 를 정밀도 $u_r$ 로 계산한다.
2. $\hat L\hat U d_k=r_k$ 를 정밀도 $u_f$ 로 푼다.
3. $\hat x_{k+1}=\hat x_k+d_k$ 를 정밀도 $u$ 로 계산한다.

$u_f$ 를 **분해 정밀도**, $u$ 를 **작업 정밀도(working precision)**, $u_r$ 을 **잔차 정밀도** 라 한다. 직관 절에서 $u_f=0.005$ 이고, 잔차와 덧셈은 정확히 계산해 $u_r=u=0$ 이다.

```typescript
// A ≈ LU 를 정밀도 u_f 로 분해해 둔다
let x = luSolve(L, U, b); // 정밀도 u_f
for (let k = 0; k < maxIter; k++) {
  const r = residual(b, A, x); // b - Ax, 정밀도 u_r
  const d = luSolve(L, U, r); // 정밀도 u_f
  x = add(x, d); // 정밀도 u
  if (norm(d) <= tol * norm(x)) break;
}
```

세 정밀도의 관계에 따라 이름이 갈린다. $u_f=u$, $u_r=u^2$ 이면 Wilkinson 의 고전적 반복 개선, $u_f=u_r=u$ 이면 고정 정밀도 반복 개선, $u_f\gt u$ 이면 **혼합 정밀도 반복 개선(mixed precision iterative refinement)** 이다.

# 성질

## 오차의 점화식

잔차 $r_k$ 를 정확히 계산하면 $r_k=A(x-\hat x_k)$ 이다. 둘째 단계의 계산값이 $(A+\Delta A_k)d_k=r_k$ 의 정확한 해라고 하면, 오차 $e_k=x-\hat x_k$ 는 다음을 만족한다.

$$
e_{k+1}=e_k-(A+\Delta A_k)^{-1}Ae_k=(A+\Delta A_k)^{-1}\Delta A_k\thinspace e_k
$$

LU 분해로 푸는 계산이 후방 안정이면 $\Vert\Delta A_k\Vert\le c_nu_f\Vert A\Vert$ 이고, $\Vert e_{k+1}\Vert\le\eta\Vert e_k\Vert$ 의 수렴률은 대략 $\eta\approx c_n\kappa(A)u_f$ 다. 따라서 $\kappa(A)u_f$ 가 $1$ 보다 충분히 작으면 오차가 기하급수로 줄어든다. 직관 절의 행렬은 고윳값이 $4$ 와 $2$ 인 대칭행렬이라 $\kappa(A)=2$ 이고, $\kappa(A)u_f=0.01$ 이 관찰한 $1/100$ 배와 같은 규모다.

## 극한 정확도

$u_r$ 과 $u$ 가 $0$ 이 아니면 오차는 $0$ 까지 줄지 않고 다음 규모에서 멈춘다[^1][^2].

$$
\frac{\Vert x-\hat x_k\Vert}{\Vert x\Vert}\lesssim u+c_n\kappa(A)u_r
$$

분해 정밀도 $u_f$ 는 수렴률만 정하고 극한 정확도에 들어가지 않는다. 잔차 정밀도가 $u_r=u^2$ 이고 $\kappa(A)u\le 1$ 이면 극한 정확도는 $u$ 규모, 곧 작업 정밀도로 반올림한 참값이다. $u_r=u$ 이면 극한이 $\kappa(A)u$ 이고, 처음 푼 답과 정확도의 규모가 같다.

## 고정 정밀도에서의 후방 오차

$u_f=u_r=u$ 이면 전방 오차의 극한은 $\kappa(A)u$ 규모로 남지만, 부분 피벗팅을 쓴 [Gauss 소거법](gaussian-elimination.md) 뒤에 반복 개선을 한 번 하면 성분별 후방 오차가 $u$ 규모가 된다. 이것이 Skeel 정리(Skeel's theorem)다[^3]. 증폭인자(growth factor)가 크거나 행렬의 행들의 크기가 크게 다를 때 소거만으로는 이 후방 오차가 보장되지 않는다.

# 활용

- 반정밀도 하드웨어. [부동소수점 산술](floating-point-arithmetic.md)의 IEEE 754 표준(Institute of Electrical and Electronics Engineers 754)의 반정밀도는 $u_f=2^{-11}\approx 4.9\times 10^{-4}$ 이다. 반정밀도 행렬 곱셈이 빠른 장치에서 LU 분해를 반정밀도로 하고 배정밀도로 반복 개선하면, $\kappa(A)$ 가 $10^3$ 보다 충분히 작은 행렬에서 배정밀도 정확도의 해를 얻는다. LU 분해의 연산은 $n^3$ 규모이고 잔차와 삼각계 풀이는 $n^2$ 규모라 계산 시간의 대부분이 낮은 정밀도로 간다.
- 고친 양을 [GMRES](gmres.md)(generalized minimal residual)로 구하는 변형. 둘째 단계의 $\hat L\hat Ud_k=r_k$ 대신 $\hat U^{-1}\hat L^{-1}$ 을 전처리로 쓴 GMRES 로 $Ad_k=r_k$ 를 풀면, $\kappa(A)u_f$ 가 $1$ 보다 커도 수렴한다[^4].
- 희소 직접법. 행렬의 희소 구조를 지키려고 피벗을 미리 정하는 정적 피벗팅(static pivoting)은 후방 안정성을 잃기 쉽다. 그 뒤에 반복 개선을 몇 번 해서 정확도를 회복한다.

[^1]: N. J. Higham, *Accuracy and Stability of Numerical Algorithms*, 2nd ed., SIAM, 2002, Chapter 12.
[^2]: E. Carson, N. J. Higham, "Accelerating the solution of linear systems by iterative refinement in three precisions", *SIAM J. Sci. Comput.* 40 (2018), A817–A847.
[^3]: R. D. Skeel, "Iterative refinement implies numerical stability for Gaussian elimination", *Math. Comp.* 35 (1980), 817–832.
[^4]: E. Carson, N. J. Higham, "A new analysis of iterative refinement and its application to accurate solution of ill-conditioned sparse linear systems", *SIAM J. Sci. Comput.* 39 (2017), A2834–A2856.

# 연관 문서

## 선수지식

- [후방 오차 분석](backward-error-analysis.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #computation #algorithms
