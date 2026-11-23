# Zassenhaus 공식

# 개요

**Zassenhaus 공식(Zassenhaus formula)** 은 두 행렬의 합의 지수 $e^{X+Y}$ 를 $e^X$, $e^Y$ 와 교환자들의 지수의 곱으로 쪼개어 쓰는 공식이다. $X$ 와 $Y$ 가 교환하지 않으면 $e^{X+Y}$ 는 $e^Xe^Y$ 와 다르고, 두 지수를 따로 계산할 수 있어도 합의 지수를 바로 얻지 못한다. Zassenhaus 공식은 $e^Xe^Y$ 뒤에 붙여야 할 보정 인자를 $[X,Y]$ 와 그 거듭된 교환자의 지수로 차수마다 적는다.

# 직관

$3\times 3$ 행렬 $X$ 와 $Y$ 를 다음으로 둔다.

$$
X=\begin{pmatrix}0&1&0\cr 0&0&0\cr 0&0&0\end{pmatrix},\qquad Y=\begin{pmatrix}0&0&0\cr 0&0&1\cr 0&0&0\end{pmatrix}
$$

$X^2=Y^2=0$ 이라 $e^X=I+X$, $e^Y=I+Y$ 이고, 곱 $(I+X)(I+Y)$ 의 오른쪽 위 성분은 $XY$ 에서 온 $1$ 이다. $N=X+Y$ 는 $N^3=0$ 이라 $e^N=I+N+N^2/2$ 이고, 오른쪽 위 성분은 $1/2$ 이다. 두 행렬은 오른쪽 위 성분에서만 $1/2$ 만큼 다르다.

$XY$ 는 오른쪽 위 성분만 $1$ 인 행렬이고 $YX=0$ 이라 교환자 $[X,Y]=XY-YX$ 가 그 행렬이다. $[X,Y]$ 는 $X$, $Y$ 와 교환하고 제곱이 $0$ 이다. 그래서 $e^{-[X,Y]/2}=I-\frac12[X,Y]$ 를 $e^Xe^Y$ 뒤에 곱하면 오른쪽 위 성분이 $1/2$ 로 바뀌고 다음이 성립한다.

$$
e^{X+Y}=e^Xe^Ye^{-\frac12[X,Y]}
$$

# 정의

$X$, $Y$ 가 정사각행렬이고 $t$ 가 수일 때 다음 전개를 **Zassenhaus 공식** 이라 한다.[^1][^2]

$$
e^{t(X+Y)}=e^{tX}e^{tY}e^{t^2C\_2}e^{t^3C\_3}e^{t^4C\_4}\cdots
$$

여기서 $C\_n$ 은 $X$, $Y$ 의 $n$ 겹 교환자들의 유리계수 일차결합이고 $t$ 와 무관하다. 처음 두 항은 다음이다.

$$
C\_2=-\frac12\lbrack X,Y\rbrack,\qquad C\_3=\frac13\bigl\lbrack Y,\lbrack X,Y\rbrack\bigr\rbrack+\frac16\bigl\lbrack X,\lbrack X,Y\rbrack\bigr\rbrack
$$

직관 절의 $X$, $Y$ 는 $\lbrack X,Y\rbrack$ 가 $X$, $Y$ 와 교환하므로 $C\_3$ 부터 모두 $0$ 이고, 곱이 $C\_2$ 에서 끝난다.

# 성질

## C₂ 의 유도

$t^2$ 의 계수를 견준다. $e^{t(X+Y)}$ 와 $e^{tX}e^{tY}$ 의 $t^2$ 의 계수는 각각 다음이다.

$$
\frac12(X+Y)^2=\frac12\bigl(X^2+XY+YX+Y^2\bigr),\qquad \frac12X^2+XY+\frac12Y^2
$$

차이 $\frac12(YX-XY)=-\frac12\lbrack X,Y\rbrack$ 가 $C\_2$ 다. 높은 차수도 $t^n$ 의 계수를 차례로 맞추어 얻는다.

## Baker–Campbell–Hausdorff 공식과의 관계

[Baker–Campbell–Hausdorff 공식](baker-campbell-hausdorff.md)은 곱 $e^Xe^Y$ 를 지수 하나 $e^Z$ 로 모으고, Zassenhaus 공식은 지수 하나 $e^{X+Y}$ 를 곱으로 쪼갠다. $e^{-tY}e^{-tX}e^{t(X+Y)}$ 를 BCH 공식(Baker–Campbell–Hausdorff formula)으로 지수 하나로 모으고 $t^2$ 의 항을 떼어 내는 일을 되풀이하면 $C\_n$ 이 차례로 나온다. Casas, Murua, Nadinic 은 이 계산을 점화식으로 정리해 $C\_n$ 을 높은 차수까지 효율적으로 계산했다.[^2]

## 수렴

$X$ 와 $Y$ 의 노름이 충분히 작으면 무한곱이 수렴한다.[^2] 거듭된 교환자가 어느 차수부터 모두 $0$ 인 멱영 [Lie 대수](lie-algebras.md)에서는 곱이 유한하고 모든 $X$, $Y$ 에서 성립한다. 직관 절의 두 행렬이 생성하는 Lie 대수는 Heisenberg 대수(Heisenberg algebra)이고, 곱이 $C\_2$ 에서 끝난다.

## 곱 공식의 오차

$t=1/m$ 으로 두면 다음이다.

$$
e^{(X+Y)/m}=e^{X/m}e^{Y/m}e^{-\lbrack X,Y\rbrack/(2m^2)}\cdots
$$

한 걸음의 오차가 $\frac{1}{2m^2}\lbrack X,Y\rbrack$ 정도이고 $m$ 걸음을 이으면 $\frac1{2m}\lbrack X,Y\rbrack$ 정도가 남는다. 그래서 [Lie–Trotter 곱 공식](lie-trotter-formula.md) $\bigl(e^{X/m}e^{Y/m}\bigr)^m\to e^{X+Y}$ 의 오차는 $1/m$ 에 비례한다.

# 활용

- 양자 광학의 변위 연산자. 소멸 연산자 $a$ 와 생성 연산자 $a^\dagger$ 는 $\lbrack a,a^\dagger\rbrack=1$ 을 만족하고, 이 교환자가 모든 것과 교환하므로 곱이 $C\_2$ 에서 끝나 $e^{\alpha a^\dagger-\bar\alpha a}=e^{-\vert\alpha\vert^2/2}e^{\alpha a^\dagger}e^{-\bar\alpha a}$ 다. 결맞은 상태의 계산에 쓴다.
- 분할 적분법. 미분방정식의 우변을 두 부분으로 나누어 각 부분의 흐름을 번갈아 곱할 때, $C\_2$, $C\_3$ 으로 오차의 주된 항을 적어 분할의 차수를 정한다.
- 양자 계산의 해밀토니언 시뮬레이션. 여러 항의 합으로 된 해밀토니언의 시간 발전 $e^{-it(H\_1+H\_2)}$ 를 각 항의 지수의 곱으로 어림할 때 오차를 교환자로 센다.

[^1]: W. Magnus, "On the exponential solution of differential equations for a linear operator", *Communications on Pure and Applied Mathematics* 7 (1954), 649–673.

[^2]: F. Casas, A. Murua, M. Nadinic, "Efficient computation of the Zassenhaus formula", *Computer Physics Communications* 183 (2012), 2386–2391.

# 연관 문서

## 선수지식

- [Baker–Campbell–Hausdorff 공식](baker-campbell-hausdorff.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #linear_algebra #analysis
