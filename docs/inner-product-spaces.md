# 내적 공간

# 개요

**내적 공간(inner product space)** 은 두 벡터에서 수 하나를 내는 내적이 주어져 길이와 각도를 잴 수 있는 [벡터 공간](vector-spaces.md)이다. 평면에서 점 $(3,1)$ 에 가장 가까운 직선 $y=x$ 위의 점은, $(3,1)$ 에서 직선에 수직으로 내린 발 $(2,2)$ 다. 이 계산에는 수직이 필요한데, 덧셈과 상수배만 있는 벡터 공간에서는 수직을 정할 수 없다. 내적 공간에서는 내적이 $0$ 인 두 벡터를 수직으로 정의해, 함수들의 공간처럼 그림을 그릴 수 없는 공간에서도 가장 가까운 점을 같은 방식으로 구한다.

# 직관

개요의 문제를 계산한다. 직선 $y=x$ 위의 점은 $t(1,1)$ 꼴이고, $(3,1)$ 에서 $t(1,1)$ 로 가는 벡터는 $(t-3,\thinspace t-1)$ 이다. 이 벡터가 직선과 수직이 되는 $t$ 를 찾으려면 수직을 수로 판정하는 방법이 있어야 한다.

평면의 두 벡터 $(a,b)$, $(c,d)$ 에 $ac+bd$ 를 대응시킨다. 이 값은 피타고라스 정리에서 나온다. 두 벡터와 그 차가 만드는 삼각형에서 $(a-c)^2+(b-d)^2=(a^2+b^2)+(c^2+d^2)-2(ac+bd)$ 이므로, 끼인각이 직각인 것과 $ac+bd=0$ 인 것이 같다.

$(t-3,\thinspace t-1)$ 과 $(1,1)$ 에 이 값을 계산하면 $(t-3)+(t-1)=2t-4$ 이고, $t=2$ 에서 $0$ 이다. 그래서 수선의 발은 $(2,2)$ 이고 거리는 $(1,-1)$ 의 길이 $\sqrt{1+1}=\sqrt2$ 다. $(a,b)$ 의 길이 $\sqrt{a^2+b^2}$ 도 $(a,b)$ 와 자기 자신에 대한 이 값의 제곱근이다.

# 정의

$V$ 를 [실수](real-numbers.md)체 또는 [복소수](complex-numbers.md)체 위의 벡터 공간이라 하자. **내적(inner product)** 은 $V$ 의 두 벡터에 스칼라 $\langle u,v\rangle$ 를 주는 함수로 첫 인수에 대한 선형성, 켤레대칭성, 양의 정부호성을 만족하는 것이다.[^1] 윗줄은 복소켤레이고 실수 위에서는 켤레가 항등이라 대칭성이 된다.

$$
\langle \alpha u+\beta w,\ v\rangle=\alpha\langle u,v\rangle+\beta\langle w,v\rangle
$$

$$
\langle u,v\rangle=\overline{\langle v,u\rangle},\qquad
\langle v,v\rangle\ge 0,\quad \langle v,v\rangle=0\iff v=0
$$

직관 절의 $\langle(a,b),(c,d)\rangle=ac+bd$ 가 내적이고, $\langle(3,1),(1,1)\rangle=4$ 다. 내적이 주어진 벡터 공간이 내적 공간이다. **노름(norm)** 과 거리는 다음으로 정의한다.

$$
\lVert v\rVert=\sqrt{\langle v,v\rangle},\qquad d(u,v)=\lVert u-v\rVert
$$

$\lVert(3,1)\rVert=\sqrt{10}$ 이고, $(3,1)$ 과 $(2,2)$ 의 거리는 $\sqrt2$ 다.

두 벡터의 내적이 $0$ 이면 **직교(orthogonal)** 한다고 한다. $(1,1)$ 과 $(1,-1)$ 은 직교한다. **정규직교집합(orthonormal set)** 은 노름이 $1$ 이고 서로 직교하는 벡터들의 모임이고, 그것이 기저이면 **정규직교기저(orthonormal basis)** 라 한다.

$$
\langle e_i,e_j\rangle=\delta_{ij}
$$

$\tfrac{1}{\sqrt2}(1,1)$, $\tfrac{1}{\sqrt2}(1,-1)$ 은 평면의 정규직교기저다. 복소 $n$ 짝에서는 켤레 점곱 $\sum_i u_i\overline{v_i}$ 가 내적이고, 구간에서 제곱적분 가능한 함수들에는 적분 내적이 있다.

$$
\langle f,g\rangle=\int_a^b f(x)\overline{g(x)}\thinspace dx
$$

구간 $\lbrack -1,1\rbrack$ 에서 $\langle 1,x\rangle=\int_{-1}^{1}x\thinspace dx=0$ 이므로 상수함수 $1$ 과 $x$ 는 직교한다.

# 성질

## Cauchy–Schwarz 부등식

임의의 $u,v$ 에 대해 다음 [Cauchy–Schwarz 부등식](cauchy-schwarz.md)이 성립하고 등호는 $u$ 와 $v$ 가 선형종속일 때만 성립한다.[^1]

$$
|\langle u,v\rangle|\le \lVert u\rVert\thinspace\lVert v\rVert
$$

$v=0$ 이면 자명하다. $v\ne0$ 이면 $u$ 에서 $v$ 방향 성분을 뺀 벡터의 노름 제곱이 음이 아니다.

$$
0\le\Big\lVert u-\frac{\langle u,v\rangle}{\lVert v\rVert^2}v\Big\rVert^2
=\lVert u\rVert^2-\frac{|\langle u,v\rangle|^2}{\lVert v\rVert^2}
$$

우변을 옮기면 부등식이 되고, 등호는 뺀 벡터가 0, 곧 $u$ 가 $v$ 의 배수일 때다.

## 노름의 성질

삼각부등식은 양변을 제곱하고 Cauchy–Schwarz 를 적용하면 나오므로 내적 공간은 항상 [거리 공간](metric-spaces.md)이다. 직교하면 Pythagoras 등식이, 일반적으로는 평행사변형 법칙이 성립한다.

$$
\lVert u+v\rVert\le\lVert u\rVert+\lVert v\rVert,
\qquad \langle u,v\rangle=0\Rightarrow \lVert u+v\rVert^2=\lVert u\rVert^2+\lVert v\rVert^2
$$

$$
\lVert u+v\rVert^2+\lVert u-v\rVert^2=2\lVert u\rVert^2+2\lVert v\rVert^2
$$

모든 노름이 내적에서 오지는 않는다. 좌표 절댓값의 최댓값으로 정의한 노름은 평행사변형 법칙을 만족하지 않으므로 어떤 내적에서도 유도되지 않는다. 역으로 평행사변형 법칙을 만족하는 노름은 내적에서 유도된다(Jordan–von Neumann 정리). 거리에 대해 [완비](completeness.md)인 내적 공간을 [Hilbert 공간](hilbert-spaces.md)이라 한다.

## Gram–Schmidt 과정

선형독립인 $v_1,\dots,v_n$ 이 생성하는 공간과 같은 공간을 생성하는 정규직교기저를 귀납적으로 만든다.[^2] $k$ 번째 단계에서 이미 만든 정규직교벡터 방향 성분을 뺀다.

$$
w_k=v_k-\sum_{j=1}^{k-1}\langle v_k,e_j\rangle e_j,
\qquad e_k=\frac{w_k}{\lVert w_k\rVert}
$$

$w_k=0$ 은 $v_k$ 가 앞 벡터들이 생성하는 공간에 있다는 뜻이므로 선형독립 가정 아래 일어나지 않는다. [행렬](matrices.md) 언어로는 열이 독립인 행렬의 QR 분해(orthogonal–triangular decomposition)다. 정규직교기저에서는 좌표가 내적으로 읽히고 노름이 좌표 제곱합이 된다(Parseval 등식).

$$
v=\sum_{i=1}^{n}\langle v,e_i\rangle e_i,
\qquad \lVert v\rVert^2=\sum_{i=1}^{n}|\langle v,e_i\rangle|^2
$$

## 정사영과 최선의 근사

$W$ 를 유한차원 부분공간, $e_1,\dots,e_m$ 을 $W$ 의 정규직교기저라 하면 $W$ 로의 정사영은 다음과 같다.

$$
P_W v=\sum_{i=1}^{m}\langle v,e_i\rangle e_i
$$

$v-P_W v$ 는 $W$ 의 모든 원소와 직교하므로 $W$ 의 임의의 $w$ 에 대해 Pythagoras 로 다음을 얻는다. $P_W v$ 가 $W$ 안에서 $v$ 에 가장 가까운 유일한 점이다.

$$
\lVert v-w\rVert^2=\lVert v-P_Wv\rVert^2+\lVert P_Wv-w\rVert^2\ \ge\ \lVert v-P_Wv\rVert^2
$$

직교여공간을 $W$ 에 직교하는 벡터 전체로 정의하면 유한차원에서 공간이 직교분해된다.

$$
V=W\oplus W^{\perp},\qquad \dim W+\dim W^{\perp}=\dim V
$$

# 활용

## 최소제곱

$A$ 의 열이 생성하는 부분공간으로 $b$ 를 정사영하면 과결정 연립방정식의 최소제곱해를 얻고, 직교조건 $A^{\mathsf T}(b-Ax)=0$ 이 정규방정식이 된다.

$$
A^{\mathsf T}A\thinspace x=A^{\mathsf T}b
$$

열이 독립이면 $A^{\mathsf T}A$ 가 가역이라 해가 유일하고, 그렇지 않으면 [특이값 분해](singular-value-decomposition.md)로 최소노름해를 고른다. 목적함수가 볼록이므로 [볼록성](convexity.md) 이론의 예이기도 하다.

## 직교기저와 Fourier 변환

복소 [지수함수](exponential-function.md)들은 주기함수 공간의 정규직교기저이고, 유한 차원에서는 [이산 Fourier 변환](fourier.md)이 그 좌표 변환이다. 신호를 직교성분으로 쪼개면 에너지가 성분별로 분리된다(Parseval).

## 연산자 이론 연결

내적이 있으면 수반연산자와 자기수반성을 정의할 수 있고 [스펙트럼 정리](spectral-theorem.md)로 이어진다. 확률에서는 제곱적분 가능한 [확률변수](random-variables.md)들의 [공분산](covariance.md)이 내적이 되어 상관계수가 Cauchy–Schwarz 의 코사인, 조건부기댓값이 정사영이 된다.

[^1]: Anne Schilling et al., MAT067 — Inner Product Spaces, University of California, Davis. https://www.math.ucdavis.edu/~anne/WQ2007/mat67-Lj-Inner_Product_Spaces.pdf
[^2]: Beifang Chen, Math 111 — Inner Product Spaces and Orthogonality, HKUST. https://www.math.hkust.edu.hk/~mabfchen/Math111/Week13-14.pdf

# 연관 문서

## 선수지식

- [벡터 공간](vector-spaces.md)
- [거리 공간](metric-spaces.md)

## 더 알아보기

### 직교분해와 스펙트럼

- [Cauchy–Schwarz 부등식](cauchy-schwarz.md)
- [스펙트럼 정리](spectral-theorem.md)
- [Hilbert 공간](hilbert-spaces.md)
- [직교다항식](orthogonal-polynomials.md)
- [선형회귀](linear-regression.md)

### 기하와 대수

- [곡률](curvature.md)
- [격자](lattices.md)
- [이차형식](quadratic-forms.md)
- [근계](root-systems.md)

#linear_algebra #analysis #functional_analysis
