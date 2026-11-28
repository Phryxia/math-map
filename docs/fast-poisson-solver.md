# 빠른 Poisson 풀이

# 개요

**빠른 Poisson 풀이(fast Poisson solver)** 는 직사각형 격자 위의 이산 [Poisson 방정식](poisson-equation.md)을 이산 사인 변환(discrete sine transform)으로 대각화해 푸는 방법이다. 가운데를 데우는 정사각형 판의 온도를 가로세로 $1000$ 칸의 격자에서 구하면 미지수가 $10^6$ 개이고, 띠 행렬의 Gauss 소거로는 연산이 $10^{12}$ 번 가까이 든다. 격자의 행과 열에 사인 변환을 한 번씩 하면 연립방정식이 미지수마다 나눗셈 하나로 바뀌고, 연산은 $10^7$ 번 정도로 준다.

# 직관

한 변이 $1$ 인 정사각형 판을 $h=1/4$ 간격으로 나누면 안쪽 격자점이 $3\times 3$ 개다. 테두리 온도는 $0$ 이고 가운데 점에만 열원이 있다. 안쪽 점 $(j,k)$ 의 온도 $u\_{jk}$ 는 이웃 넷과의 차이로 다음 식을 만족한다.

$$
4u\_{jk}-u\_{j-1,k}-u\_{j+1,k}-u\_{j,k-1}-u\_{j,k+1}=h^2f\_{jk}
$$

$h^2f$ 를 가운데에서 $1$, 나머지에서 $0$ 으로 두면 미지수 아홉 개의 연립방정식이다. 왼쪽은 가로 방향의 이차 차분 $2u\_{jk}-u\_{j-1,k}-u\_{j+1,k}$ 와 세로 방향의 이차 차분의 합이다. 한 줄의 이차 차분은 사인 곡선 $\sin(jk\pi/4)$ 를 상수배로 보내므로, 가로와 세로를 각각 사인 곡선들로 펼치면 방정식이 성분마다 따로 풀린다.

그렇게 풀면 가운데가 $3/8$, 가운데의 상하좌우가 $1/8$, 네 모서리가 $1/16$ 이다. 가운데 식은 $4\cdot 3/8-4\cdot 1/8=1$ 이고, 모서리 식은 $4\cdot 1/16-1/8-1/8=0$ 으로 맞는다.

# 정의

$n$ 이 양의 정수이고 $h=1/(n+1)$ 이다. 1 차원 이차 차분 행렬 $T$ 는 대각 성분이 $2$, 바로 위아래 성분이 $-1$ 인 $n\times n$ 삼중대각 행렬이다. 안쪽 격자점의 값을 행렬 $U$ 와 $F$ 로 늘어놓으면 이산 Poisson 방정식은 다음과 같다.

$$
TU+UT=h^2F,\qquad (I\otimes T+T\otimes I)\thinspace\mathrm{vec}(U)=h^2\thinspace\mathrm{vec}(F)
$$

둘째 식은 첫째 식을 [Kronecker 곱](kronecker-product.md)으로 쓴 것이다. 성분이 $S\_{jk}=\sin\bigl(jk\pi/(n+1)\bigr)$ 인 $n\times n$ 행렬 $S$ 를 곱하는 것을 **이산 사인 변환** 이라 한다.

**빠른 Poisson 풀이** 는 다음 세 단계다. $\lambda\_k$ 는 아래 성질 절의 $T$ 의 고윳값이다.

```javascript
function fastPoisson(F, h) { // F: n x n, 테두리 값 0
  const n = F.length;
  const G = dst2(F); // G = S F S, 행과 열에 사인 변환
  for (let j = 0; j < n; j++)
    for (let k = 0; k < n; k++) G[j][k] /= lambda(j + 1, n) + lambda(k + 1, n);
  const c = (2 / (n + 1)) ** 2 * h * h; // S S = ((n+1)/2) I
  return scale(dst2(G), c); // U = c S G S
}
```

직관 절은 $n=3$ 이다. $SFS$ 는 모서리 넷만 $\pm 1$ 인 행렬이고, 이것을 $\lambda\_j+\lambda\_k$ 로 나눠 되돌리면 직관 절의 $U$ 가 나온다.

# 성질

## 이차 차분 행렬의 고유벡터

정리. $T$ 의 고유벡터는 $s\_k=\bigl(\sin(jk\pi/(n+1))\bigr)\_{j=1}^n$ 이고 고윳값은 다음과 같다.

$$
\lambda\_k=2-2\cos\frac{k\pi}{n+1}=4\sin^2\frac{k\pi}{2(n+1)},\qquad k=1,\dots,n
$$

증명의 요지. $\theta=k\pi/(n+1)$ 로 두면 삼각함수의 덧셈정리에서 $\sin((j-1)\theta)+\sin((j+1)\theta)=2\cos\theta\sin(j\theta)$ 다. $j=0$ 과 $j=n+1$ 에서 $\sin$ 이 $0$ 이므로 테두리 조건도 맞는다. 직관 절의 $n=3$ 에서는 $\lambda\_k=2-\sqrt2,\thinspace 2,\thinspace 2+\sqrt2$ 다.

## 대각화

$S$ 는 대칭이고 $S^2=\frac{n+1}{2}I$ 이므로 $T=\frac{2}{n+1}S\Lambda S$ 다. 이것을 $TU+UT=h^2F$ 에 넣고 양쪽에 $S$ 를 곱하면 $G=SUS$ 에 대해 $(\lambda\_j+\lambda\_k)G\_{jk}=h^2(SFS)\_{jk}$ 가 된다. 행렬 방정식이 성분마다의 나눗셈으로 바뀌었다. 모든 $\lambda\_k$ 가 양수이므로 나눗셈은 언제나 된다.

## 비용

이산 사인 변환은 길이 $2(n+1)$ 의 [고속 Fourier 변환](fft.md)으로 $O(n\log n)$ 번에 한다. 행 $n$ 개와 열 $n$ 개를 두 번 변환하므로 전체는 $O(n^2\log n)$ 이다. 같은 계를 띠 Gauss 소거로 풀면 띠 너비가 $n$ 이라 $O(n^4)$, [중첩 분할](nested-dissection.md)로 순서를 바꿔도 $O(n^3)$ 이 든다. $n=1000$ 이면 $n^4=10^{12}$, $n^2\log\_2n\approx 10^7$ 이다.

## 순환 축소

$U$ 의 $k$ 번째 열을 $u\_k$, $h^2F$ 의 $k$ 번째 열을 $g\_k$ 로 쓰고 $A=T+2I$ 로 두면 $TU+UT=h^2F$ 는 열마다 다음 식이다. 테두리에서는 $u\_0=u\_{n+1}=0$ 이다.

$$
-u\_{k-1}+Au\_k-u\_{k+1}=g\_k
$$

$k-1$, $k$, $k+1$ 번째 식을 가져와 가운데 식에 $A$ 를 곱하고 양옆 식을 더하면 $u\_{k\pm 1}$ 이 사라진다.

$$
-u\_{k-2}+(A^2-2I)u\_k-u\_{k+2}=g\_{k-1}+Ag\_k+g\_{k+1}
$$

짝수 번째 열만 남긴 계가 계수만 $A^2-2I$ 로 바뀐 같은 꼴이다. 이것을 되풀이해 열을 절반씩 줄이는 방법을 **순환 축소(cyclic reduction)** 라 한다[^2]. 열의 수가 $n=2^m-1$ 이면 $m-1$ 번 만에 식 하나가 남는다. 남은 열을 푼 뒤에는 거꾸로 다음 삼중대각 계를 풀어 지운 열을 채운다.

$$
Au\_k=g\_k+u\_{k-1}+u\_{k+1}
$$

직관 절의 $n=3$ 에서는 한 번 줄이면 $u\_2$ 의 식만 남는다. $g\_2=(0,1,0)$, $g\_1=g\_3=0$ 이므로 오른쪽은 $Ag\_2=(-1,4,-1)$ 이고, 다음 계를 풀면 $u\_2=(1/8,3/8,1/8)$ 이다.

$$
(A^2-2I)\thinspace u\_2=\begin{pmatrix}15&-8&1\cr -8&16&-8\cr 1&-8&15\end{pmatrix}u\_2=\begin{pmatrix}-1\cr 4\cr -1\end{pmatrix}
$$

$Au\_1=u\_2$ 를 풀면 $u\_1=(1/16,1/8,1/16)$ 이고, 직관 절의 답과 같다.

$r$ 번 줄인 계수는 [Chebyshev 다항식](chebyshev-polynomials.md) $2T\_{2^r}(A/2)$ 이고, 근 $2\cos\bigl((2i-1)\pi/2^{r+1}\bigr)$ 로 $2^r$ 개의 삼중대각 인수로 갈린다. $A^2-2I=(A-\sqrt2 I)(A+\sqrt2 I)$ 가 $r=1$ 인 경우다. 그래서 각 단계는 [삼중대각 계](tridiagonal-systems.md)만 풀고, 단계마다 $O(n^2)$, 전체 $O(n^2\log n)$ 이 든다. 오른쪽을 위 식대로 곱해 가면 반올림 오차가 커지므로, 오른쪽을 두 벡터로 나눠 갱신하는 Buneman 의 변형(Buneman's algorithm)을 쓴다[^2].

순환 축소를 $\ell$ 번만 하고 남은 계를 사인 변환으로 푼 뒤 거꾸로 채우는 방법을 **FACR**(Fourier analysis and cyclic reduction) 이라 한다[^3]. $\ell$ 을 $\log\_2\log\_2 n$ 근처로 잡으면 비용이 $O(n^2\log\log n)$ 으로 준다.

## 쓸 수 있는 범위

이 방법은 영역이 직사각형이고 계수가 상수라 연산자가 가로와 세로로 나뉠 때만 쓴다. 테두리 조건이 Neumann 이면 [이산 코사인 변환](discrete-cosine-transform.md)을, 주기 조건이면 [이산 Fourier 변환](fourier.md)을 같은 자리에 쓴다. 한 방향만 사인 변환하고 다른 방향은 삼중대각 계를 직접 푸는 변형도 같은 차수의 비용이다.

# 활용

- 전처리. 계수가 자리마다 다른 타원형 방정식을 [공액기울기법](conjugate-gradient.md)으로 풀 때, 상수 계수 Laplace 작용소의 빠른 풀이를 전처리로 쓴다.
- 비압축성 유체. 속도장을 발산이 $0$ 인 쪽으로 사영하는 단계가 압력의 Poisson 방정식 하나이고, 직사각형 격자에서는 매 시간 걸음마다 이 방법으로 푼다.
- 그림 편집. 붙여 넣은 그림 조각의 기울기를 유지하며 경계에서 주변과 이어지게 하는 Poisson 그림 편집이 직사각형 영역의 Poisson 방정식을 푼다[^1].
- [Sylvester 방정식](sylvester-equation.md). $TU+UT=h^2F$ 는 두 계수가 같은 Sylvester 방정식이고, 두 계수의 고유벡터를 빠르게 곱할 수 있으면 같은 방법이 통한다.

[^1]: P. Pérez, M. Gangnet, A. Blake, "Poisson image editing", *ACM Transactions on Graphics* 22 (2003), 313–318.
[^2]: B. L. Buzbee, G. H. Golub, C. W. Nielson, "On direct methods for solving Poisson's equations", *SIAM Journal on Numerical Analysis* 7 (1970), 627–656.
[^3]: P. N. Swarztrauber, "The methods of cyclic reduction, Fourier analysis and the FACR algorithm for the discrete solution of Poisson's equation on a rectangle", *SIAM Review* 19 (1977), 490–501.

# 연관 문서

## 선수지식

- [Kronecker 곱](kronecker-product.md)
- [Poisson 방정식](poisson-equation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #algorithms #analysis
