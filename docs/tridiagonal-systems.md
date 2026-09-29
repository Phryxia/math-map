# 삼중대각계

# 개요

삼중대각계는 계수행렬의 $0$ 아닌 성분이 대각과 그 바로 위아래 대각에만 놓인 선형계다. Thomas 알고리즘이 미지수 개수에 비례하는 연산으로 푼다.

일반 선형계를 Gauss 소거로 풀면 연산량이 미지수 개수의 세제곱에 비례한다. 삼중대각계에서는 소거가 한 단계에 고치는 성분이 두 개뿐이므로 그 세제곱이 사라진다.

# 직관

구간 $[0,1]$ 에서 $-u''=f$ 를 풀려고 한다. 간격 $h$ 의 격자점에서 이계도함수를 차분으로 바꾸면 미지수 $u_1,\dots,u_n$ 에 대한 연립방정식 $-u_{i-1}+2u_i-u_{i+1}=h^2f_i$ 가 나온다. Gauss 소거는 곱셈을 $n^3/3$ 번 쓰므로 $n=10^4$ 이면 $3\times10^{11}$ 번이다.

$n=4$ 의 계수행렬로 소거를 실제로 해 본다.

$$
\begin{pmatrix}2&-1&0&0\cr -1&2&-1&0\cr 0&-1&2&-1\cr 0&0&-1&2\end{pmatrix}
$$

첫 열을 소거하려면 $1$ 행의 $-1/2$ 배를 $2$ 행에서 뺀다. $3$ 행과 $4$ 행의 첫 성분은 이미 $0$ 이므로 뺄 것이 없다. $1$ 행에서 $0$ 이 아닌 성분은 $2$ 와 $-1$ 둘뿐이므로 $2$ 행에서 값이 바뀌는 자리도 대각성분과 우변 둘뿐이다. 대각성분은 $2-1/2=3/2$ 가 된다.

남은 $3\times3$ 부분도 같은 꼴이다. $2$ 행의 $-2/3$ 배를 $3$ 행에서 빼면 대각성분이 $2-2/3=4/3$ 이 되고, 다음 단계에서 $4$ 행의 대각성분이 $2-3/4=5/4$ 가 된다. 네 대각성분 $2,\thinspace 3/2,\thinspace 4/3,\thinspace 5/4$ 는 $(i+1)/i$ 다.

한 단계에서 쓴 연산은 나눗셈 하나와 곱셈 둘이고, 단계는 $n-1$ 번이다. 소거가 끝난 행렬은 대각과 그 위 대각에만 값이 있으므로 후진 대입도 한 단계에 곱셈 하나다. 전체 연산량이 $n$ 에 비례한다. 이 절차가 Thomas 알고리즘이다.

# 정의

## 삼중대각계

$n$ 개의 미지수 $x_1,\dots,x_n$ 에 대한 연립방정식

$$
a_i x_{i-1}+b_i x_i+c_i x_{i+1}=d_i\qquad (i=1,\dots,n)
$$

에서 $a_1=c_n=0$ 인 것을 **삼중대각계**라 한다. 계수행렬은 다음과 같다.

$$
\begin{pmatrix}b_1&c_1&&\cr a_2&b_2&c_2&\cr &\ddots&\ddots&\ddots\cr &&a_n&b_n\end{pmatrix}
$$

$a_i$ 를 하부대각, $b_i$ 를 대각, $c_i$ 를 상부대각이라 한다. 성분 세 벡터만 저장하면 되므로 기억 공간도 $n$ 에 비례한다.

## Thomas 알고리즘

전진 소거에서 피벗 $m_i$, 수정된 상부대각 $\gamma_i$, 수정된 우변 $\rho_i$ 를 차례로 계산한다.

$$
m_1=b_1,\qquad \gamma_1=\frac{c_1}{m_1},\qquad \rho_1=\frac{d_1}{m_1}
$$

$$
m_i=b_i-a_i\gamma_{i-1},\qquad \gamma_i=\frac{c_i}{m_i},\qquad \rho_i=\frac{d_i-a_i\rho_{i-1}}{m_i}
$$

후진 대입은 마지막 미지수에서 거슬러 올라간다.

$$
x_n=\rho_n,\qquad x_i=\rho_i-\gamma_i x_{i+1}
$$

이 절차를 **Thomas 알고리즘**이라 한다.

```javascript
function thomas(a, b, c, d) {
  const n = b.length
  const gamma = new Array(n), rho = new Array(n), x = new Array(n)
  let m = b[0]
  gamma[0] = c[0] / m
  rho[0] = d[0] / m
  for (let i = 1; i < n; i++) {
    m = b[i] - a[i] * gamma[i - 1]
    gamma[i] = c[i] / m
    rho[i] = (d[i] - a[i] * rho[i - 1]) / m
  }
  x[n - 1] = rho[n - 1]
  for (let i = n - 2; i >= 0; i--) {
    x[i] = rho[i] - gamma[i] * x[i + 1]
  }
  return x
}
```

# 성질

## 연산량

Thomas 알고리즘은 곱셈과 나눗셈을 $5n-4$ 번, 덧셈과 뺄셈을 $3n-3$ 번 쓴다. 전진 소거의 한 단계가 곱셈 둘과 나눗셈 둘, 뺄셈 둘이고 후진 대입의 한 단계가 곱셈 하나와 뺄셈 하나다.

## $LU$ 분해

**정리.** 삼중대각행렬 $A$ 를 피벗 없이 분해할 수 있으면 $A=LU$ 에서 $L$ 은 대각성분이 $1$ 이고 하부대각이 $\ell_i=a_i/m_{i-1}$ 인 하삼각행렬, $U$ 는 대각이 $m_i$ 이고 상부대각이 $c_i$ 인 상삼각행렬이다.

증명의 요지는 곱 $LU$ 의 성분을 세 대각과 비교하는 것이다. $i$ 행 $i$ 열은 $\ell_i c_{i-1}+m_i$ 이고 이것이 $b_i$ 와 같다는 조건이 전진 소거의 $m_i=b_i-a_i\gamma_{i-1}$ 이다. 나머지 자리는 $L$ 과 $U$ 의 대각 폭이 좁아 $0$ 이다. 일반 [행렬 분해](matrix-factorizations.md)에서 $L$ 과 $U$ 가 삼각 전체를 채우는 것과 달리 여기서는 두 인자가 각각 이중대각이므로, Thomas 알고리즘은 $L$ 과 $U$ 를 따로 저장하지 않고 소거와 대입을 한 번에 수행하는 것과 같다.

## 안정성

**정리.** 모든 $i$ 에서 $\vert b_i\vert \gt \vert a_i\vert+\vert c_i\vert$ 이면 피벗 $m_i$ 가 모두 $0$ 이 아니고 $\vert\gamma_i\vert \lt 1$ 이다.

$i$ 에 대한 귀납으로 증명한다. $\vert\gamma_1\vert=\vert c_1/b_1\vert \lt 1$ 이다. $\vert\gamma_{i-1}\vert \lt 1$ 이라 하면

$$
\vert m_i\vert=\vert b_i-a_i\gamma_{i-1}\vert\ge \vert b_i\vert-\vert a_i\vert \gt \vert c_i\vert\ge 0
$$

이므로 $m_i\ne0$ 이고 $\vert\gamma_i\vert=\vert c_i/m_i\vert \lt 1$ 이다.

그러므로 대각 우세인 삼중대각계에는 피벗팅이 필요 없다. 소거 중에 성분이 커지는 정도도 원래 행렬의 최대 성분의 두 배로 묶인다.[^1] 대각 우세가 아니면 피벗팅을 쓰고, 행 교환이 상부대각 바깥에 성분 하나를 만들므로 대각을 하나 더 두고 계산한다.

## 순환 삼중대각계

$a_1$ 과 $c_n$ 이 $0$ 이 아니어서 계수행렬의 두 모서리에 성분이 놓인 계를 **순환 삼중대각계**라 한다. 주기 경계조건을 준 차분에서 나온다.

모서리 두 성분은 계수행렬을 삼중대각행렬 $T$ 와 랭크 $1$ 행렬의 합 $A=T+uv^{\top}$ 으로 쓰면 떨어진다. Sherman–Morrison 공식으로

$$
x=y-\frac{v^{\top}y}{1+v^{\top}z}\thinspace z,\qquad Ty=d,\quad Tz=u
$$

를 얻으므로 삼중대각계를 두 번 풀어 해가 나온다. 연산량은 여전히 $n$ 에 비례한다.

# 활용

- [선 완화](line-relaxation.md)는 격자의 한 줄에 놓인 미지수를 동시에 푼다. 줄을 좌표축 방향으로 잡으면 그 줄의 방정식이 삼중대각계이므로 한 줄의 비용이 줄 길이에 비례한다.
- [Krylov 부분공간 방법](krylov-subspace-methods.md)의 Lanczos 반복은 대칭행렬을 삼중대각행렬로 옮긴다. 공액기울기법의 한 반복이 그 삼중대각계를 푸는 것이고, 삼항 점화식은 여기서 나온다.
- 열방정식의 음해법은 시간 한 단계마다 $(I-\tau L_h)u^{k+1}=u^k$ 를 푼다. $1$ 차원 격자에서 차분 작용소 $L_h$ 가 삼중대각이므로 한 단계의 비용이 격자점 개수에 비례한다.
- $3$ 차 스플라인 보간은 마디마다 이계도함수를 미지수로 두고 인접한 세 마디를 잇는 조건을 세운다. 그 연립방정식이 대각 우세인 삼중대각계다.

[^1]: Gene H. Golub and Charles F. Van Loan, *Matrix Computations*, 4th ed., Johns Hopkins University Press (2013), §4.3. 대각 우세와 대칭 양정부호 삼중대각행렬에서 피벗팅 없는 소거의 증폭인자를 다룬다.

# 연관 문서

## 선수지식

- [행렬 분해](matrix-factorizations.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #algorithms #computation
