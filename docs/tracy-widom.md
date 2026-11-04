# Tracy–Widom 분포

# 개요

**Tracy–Widom 분포(Tracy–Widom distribution)** 는 무작위 대칭행렬의 가장 큰 [고윳값](eigenvalues.md)이 [행렬](matrices.md)이 커질 때 어떻게 흩어지는지를 나타내는 극한분포다. 예로 성분을 동전 던지기로 정한 $N\times N$ 대칭행렬을 여러 개 만들고 각각의 가장 큰 고윳값을 적으면, 그 값들은 $2\sqrt N$ 근처에 모이지만 좌우가 비대칭인 분포로 흩어진다. 이 분포는 흩어짐의 크기를 $N^{-1/6}$ 으로 정하고, 크기를 맞춘 최댓값의 극한을 특수함수로 만든 식으로 준다.

# 직관

성분을 동전 던지기로 정한 $N\times N$ 대칭행렬, 곧 $i\le j$ 마다 $a_{ij}=\pm1$ 을 독립으로 뽑고 $a_{ji}=a_{ij}$ 로 둔 행렬을 생각한다. [Wigner 반원법칙](wigner-semicircle.md)에 따르면 고윳값을 $\sqrt N$ 으로 나눈 값들은 구간 $\lbrack -2,2\rbrack$ 에 반원 모양으로 퍼진다. 그래서 가장 큰 고윳값 $\lambda_{\max}$ 는 $2\sqrt N$ 근처에 있다. 행렬을 새로 뽑을 때마다 $\lambda_{\max}$ 가 $2\sqrt N$ 에서 얼마나 벗어나는지가 물음이다.

$\sqrt N$ 으로 나눈 고윳값의 밀도는 끝점 $2$ 에서 제곱근으로 사라진다. 끝점에서 거리 $\delta$ 안에 들어 있는 고윳값의 개수는 밀도를 적분해 $N\cdot\delta^{3/2}$ 규모다. 이 개수가 $1$ 이 되는 $\delta\sim N^{-2/3}$ 이 끝점 근처 고윳값들의 간격이다. $\lambda_{\max}/\sqrt N$ 은 이 간격만큼 흔들리므로 $\lambda_{\max}$ 자체는 $N^{-2/3}\cdot\sqrt N=N^{-1/6}$ 규모로 흔들린다.

그러면 $N^{2/3}(\lambda_{\max}/\sqrt N-2)$ 는 크기가 $N$ 에 무관한 확률변수이고, $N\to\infty$ 에서 분포가 하나로 수렴한다. 이 극한은 [정규분포](normal-distribution.md)가 아니다. 고윳값들은 독립이 아니고, 결합밀도의 인자 $\prod_{i\lt j}\lvert\lambda_i - \lambda_j\rvert^{\beta}$ 가 고윳값을 서로 밀어낸다. 동전 행렬처럼 실 대칭이면 $\beta=1$ 이다. $\lambda_{\max}$ 가 위로 올라가는 데는 그 하나만 움직이면 되고, 아래로 내려가려면 아래 고윳값 전체가 함께 눌려야 한다. 그래서 두 꼬리의 감쇠 속도가 다르고 분포가 좌우 비대칭이다.

끝점은 고윳값이 있는 영역과 없는 영역의 경계다. [WKB 근사](wkb-approximation.md)(Wentzel–Kramers–Brillouin)에서 이런 경계는 파동이 진동하는 영역과 지수적으로 감쇠하는 영역이 만나는 회전점(turning point)이고, 그 근방에서 Hermite 다항식의 점근이 [Airy 함수](airy-functions.md)를 준다. 그래서 극한분포가 Airy 함수로 적히고, 이 극한분포가 Tracy–Widom 분포다.

# 정의

## Tracy–Widom 분포

$\beta\in\lbrace 1,2,4\rbrace$ 에 대해 아래 앙상블의 $N\times N$ 행렬의 최대 고윳값 $\lambda_{\max}$ 로

$$
F_\beta(s)=\lim_{N\to\infty}\Pr\Bigl\lbrack N^{2/3}\Bigl(\frac{\lambda_{\max}}{\sqrt N}-2\Bigr)\le s\Bigr\rbrack
$$

를 정의하고, 분포함수가 $F_\beta$ 인 분포를 $\mathrm{TW}\_\beta$ 라 쓴다. 직관 절의 동전 행렬은 실 대칭이고 $\mathrm{TW}\_1$ 로 수렴한다.

## 세 가지 앙상블

행렬 성분을 어떻게 뽑는가에 따라 세 표준 앙상블 GOE(Gaussian orthogonal ensemble), GUE(Gaussian unitary ensemble), GSE(Gaussian symplectic ensemble)가 있고, 고윳값 반발의 세기 $\beta$ 로 구분한다.

| 이름 | 성분 | β | 극한분포 |
|---|---|---|---|
| GOE | 실 대칭, 성분 독립 정규 | 1 | $F_1$ |
| GUE | Hermite 행렬, 성분 독립 복소 정규 | 2 | $F_2$ |
| GSE | 사원수 자기쌍대 | 4 | $F_4$ |

GOE 는 직관 절의 동전 행렬에서 $\pm1$ 대신 표준정규분포를 쓴 것이다. 대각 성분은 분산을 $2$ 로 둔다. GUE 는 대각선 위의 성분을 실수부와 허수부가 독립 정규인 복소수로 뽑고 아래를 켤레로 채운 Hermite 행렬(Hermitian matrix)이다.

## Airy 핵과 Fredholm 행렬식

GUE 의 고윳값은 [결정점과정](determinantal-point-process.md)(determinantal point process)을 이룬다. $k$ 개의 고윳값이 특정 위치들에 있을 상관함수가 하나의 핵 $K$ 의 $k\times k$ 행렬식으로 쓰인다는 뜻이다. 가장자리를 $N^{2/3}$ 배로 확대하면 그 핵이

$$
K_{\mathrm{Ai}}(x,y) = \frac{\mathrm{Ai}(x)\mathrm{Ai}'(y) - \mathrm{Ai}'(x)\mathrm{Ai}(y)}{x-y}
= \int_0^\infty \mathrm{Ai}(x+t)\mathrm{Ai}(y+t)\thinspace dt
$$

로 수렴한다. 이 $K_{\mathrm{Ai}}$ 를 **Airy 핵(Airy kernel)** 이라 한다. 첫 표현의 분자는 Airy 함수의 Wronskian 형태이고, $x \to y$ 극한에서 $\mathrm{Ai}'(x)^2 - x\mathrm{Ai}(x)^2$ 이 되어 특이하지 않다. 두 번째 표현에서 이 핵이 양의 준정부호(positive semidefinite)임이 나온다.

최대 고윳값이 $s$ 이하일 확률은 구간 $(s,\infty)$ 에 점이 하나도 없을 확률이므로

$$
F_2(s) = \det\left(I - K_{\mathrm{Ai}}\right)\_{L^2(s,\infty)}
$$

다. [Fredholm 행렬식](fredholm-determinant.md)은 핵의 대각합들로 만든 급수 $\exp\bigl(-\sum_{k\ge1}\tfrac1k\mathrm{tr}K^k\bigr)$ 로 정의된다.

## Painlevé II 표현

Tracy 와 Widom 의 정리는 이 행렬식을 [상미분방정식](ordinary-differential-equations.md)으로 바꾼다[^1]. [Painlevé 방정식](painleve-equations.md) 가운데 Painlevé II 방정식(Painlevé II equation)

$$
q''(x) = x\thinspace q(x) + 2q(x)^3
$$

의 해 가운데 $x \to +\infty$ 에서 $q(x) \sim \mathrm{Ai}(x)$ 인 것을 **Hastings–McLeod 해(Hastings–McLeod solution)** 라 하며, 이것이 유일하게 존재한다. 그러면

$$
F_2(s) = \exp\left(-\int_s^{\infty}(x-s)\thinspace q(x)^2\thinspace dx\right)
$$

이고, $F_1$ 과 $F_4$ 도 같은 $q$ 로

$$
F_1(s)^2 = F_2(s)\thinspace e^{-\int_s^\infty q},
\qquad
F_4(s/\sqrt2)^2 = F_2(s)\left(\cosh\int_s^\infty q\right)^2
$$

처럼 쓰인다. 무한차원 행렬식이 2계 상미분방정식 하나로 줄어들고, 수치표가 이 표현으로 계산된다. Painlevé II 에서 비선형항 $2q^3$ 를 빼면 Airy 방정식이므로 $q$ 는 Airy 함수의 비선형 변형이다.

# 성질

## 값과 꼬리

| β | 평균 | 분산 | 왜도 |
|---|---|---|---|
| 1 (GOE) | $-1.2065$ | $1.6078$ | $0.293$ |
| 2 (GUE) | $-1.7711$ | $0.8132$ | $0.224$ |
| 4 (GSE) | $-2.3069$ | $0.5177$ | $0.166$ |

평균이 음수인 것은 반발 때문에 $\lambda_{\max}$ 가 반원의 끝보다 평균적으로 안쪽에 있다는 뜻이다. $\beta$ 가 커지면 반발이 세져 분포가 더 왼쪽으로 가고 더 좁아진다.

꼬리는 양쪽이 다르다.

$$
1 - F_2(s) \sim \frac{e^{-\frac43 s^{3/2}}}{16\pi s^{3/2}}\quad(s\to+\infty),
\qquad
F_2(s) \sim \exp\left(-\frac{\lvert s\rvert^{3}}{12}\right)\quad(s\to-\infty)
$$

오른쪽 꼬리의 $e^{-\frac43 s^{3/2}}$ 는 $\mathrm{Ai}(s)^2$ 의 감쇠이며, 고윳값 하나가 혼자 멀리 나가는 사건이다. 왼쪽 꼬리는 지수가 3 으로, 스펙트럼 전체가 함께 움직이는 [대편차](large-deviations.md)(large deviation) 사건이라 확률이 더 빨리 줄어든다.

## 보편성

성분이 정규분포가 아니어도 평균 0 과 유한한 네 번째 적률만 있으면 같은 극한이 나온다. [중심극한정리](central-limit-theorem.md)에서 정규분포가 성분의 분포에 무관한 것과 같은 꼴이다.

같은 극한이 무작위 행렬 바깥에서도 나타난다. [최장 증가 부분수열](longest-increasing-subsequence.md)이 대표적이다. $n$ 개 원소의 무작위 순열에서 가장 긴 증가부분수열의 길이 $\ell_n$ 은 $2\sqrt n$ 근처에 있고, Baik–Deift–Johansson 정리(Baik–Deift–Johansson theorem)가

$$
\frac{\ell_n - 2\sqrt n}{n^{1/6}} \thickspace\longrightarrow\thickspace \mathrm{TW}\_2
$$

를 준다. 순열에는 행렬도 고윳값도 없지만 같은 분포가 나온다. 무작위 성장 모형인 모서리 성장(corner growth), ASEP(asymmetric simple exclusion process), 방향성 중합체(directed polymer)에서도 요동이 $t^{1/3}$ 규모이고 극한이 Tracy–Widom 이며, 이 부류를 [KPZ 보편성류](kpz-universality.md)(Kardar–Parisi–Zhang)라 한다.

# 활용

## Fredholm 행렬식의 수치 계산

Fredholm 행렬식의 [Nyström 법](nystrom-method.md) 구적을 Airy 핵에 적용하면 분포를 정의에서 직접 계산한다. 무한구간 $(s,\infty)$ 은 $x = s + L\tan(\pi u/4)$ 로 옮기고, 필요한 것은 $\mathrm{Ai}$ 와 $\mathrm{Ai}'$ 뿐이라 작은 $\lvert x\rvert$ 에서는 전평면 수렴 급수를 큰 $x$ 에서는 점근급수를 쓴다.

핵이 해석적이므로 Nyström 근사가 지수적으로 수렴하고, 무한차원 행렬식이 마디 수십 개의 유한 행렬식 하나로 높은 정확도에 도달한다. 같은 구적으로 평균과 분산을 적분하면 위 표의 값이 나온다. 쓰인 재료는 $\mathrm{Ai}$ 의 급수와 [Gauss 구적](gaussian-quadrature.md)과 LU(lower–upper) 분해뿐이다.

## 잡음과 신호의 판정

[주성분 분석](principal-component-analysis.md)에서 고윳값 하나가 잡음에서 나왔는지 신호에서 나왔는지 판정한다. 자료가 순수한 잡음이라면 표본공분산행렬(sample covariance matrix)의 최대 고윳값은 Tracy–Widom 을 따르므로, 관측값이 그 분포의 상위 백분위를 넘는지로 유의성을 판단한다. 고윳값 사이의 반발로 분포가 비대칭이므로, 정규근사를 쓰면 신호를 과대검출한다.

무선통신의 스펙트럼 감지, 금융 상관행렬에서 의미 있는 요인 수 결정, 성장 모형과 교통 흐름의 요동 분석에도 같은 판정 도구가 쓰인다.

[^1]: Craig A. Tracy, Harold Widom, *Level-spacing distributions and the Airy kernel*, Communications in Mathematical Physics 159 (1994), 151–174. Airy 핵의 Fredholm 행렬식과 Painlevé II 표현의 원논문.

# 연관 문서

## 선수지식

- [Wigner 반원법칙](wigner-semicircle.md)
- [Painlevé 방정식](painleve-equations.md)
- [결정점과정](determinantal-point-process.md)

## 더 알아보기

- [최장 증가 부분수열](longest-increasing-subsequence.md)
- [KPZ 보편성류](kpz-universality.md)

#probability #analysis #linear_algebra
