# 연산자 척도화

# 개요

**연산자 척도화(operator scaling)** 는 행렬 여러 개를 왼쪽과 오른쪽에서 같은 가역행렬로 곱해, 행렬 하나의 행과 열의 합을 $1$ 로 맞추는 [Sinkhorn 알고리즘](sinkhorn.md)의 행렬 판본을 만드는 방법이다. $2\times 2$ 행렬 $A_1,A_2$ 가 주어졌을 때, 미지수 $x_1,x_2$ 로 만든 $x_1A_1+x_2A_2$ 가 가역이 될 수 있는지 묻는다. $A_1=\mathrm{diag}(1,0)$, $A_2=\mathrm{diag}(0,1)$ 이면 $\mathrm{diag}(x_1,x_2)$ 라서 가역이 될 수 있고, 두 행렬의 둘째 행이 모두 $0$ 이면 어떤 $x$ 로도 가역이 아니다.

연산자 척도화는 행과 열을 번갈아 정규화하는 반복을 행렬의 조에 그대로 옮기고, 반복이 이중 확률 꼴로 수렴하는지로 이 물음의 비가환 판본을 다항시간에 판정한다.

# 직관

음이 아닌 행렬 $\begin{pmatrix}1&1\cr 0&1\end{pmatrix}$ 에 Sinkhorn 반복을 쓴다. 행을 행의 합으로 나누면 $\begin{pmatrix}1/2&1/2\cr 0&1\end{pmatrix}$ 이고, 열의 합이 $1/2$, $3/2$ 이므로 열을 나누면 $\begin{pmatrix}1&1/3\cr 0&2/3\end{pmatrix}$ 이다. 되풀이하면 오른쪽 위 성분이 $0$ 으로 가고 행렬은 단위행렬로 수렴한다. 둘째 행이 $0$ 인 $\begin{pmatrix}1&1\cr 0&0\end{pmatrix}$ 은 둘째 행을 $0$ 으로 나눠야 해서 반복이 시작되지 않는다.

이 반복을 행렬의 조로 옮긴다. 성분 $a_{jk}$ 마다 행렬 $A_{jk}=\sqrt{a_{jk}}E_{jk}$ 를 두고 $T(X)=\sum A_{jk}XA_{jk}^\ast$ 로 정하면, $T(\mathrm{diag}(y))$ 는 $j$ 번째 대각 성분이 $\sum_ka_{jk}y_k$ 인 대각행렬이다. $T(I)$ 의 대각이 행의 합이고, $T^\ast(X)=\sum A_{jk}^\ast XA_{jk}$ 에서 $T^\ast(I)$ 의 대각이 열의 합이다. 그래서 행과 열을 정규화하는 것은 $T(I)$ 와 $T^\ast(I)$ 를 $I$ 로 맞추는 것이고, 이 꼴은 $A_{jk}$ 가 아닌 아무 행렬의 조에도 쓸 수 있다.

# 정의

## 완전 양성 사상과 쌍대

$n\times n$ 복소 행렬 $A_1,\dots,A_m$ 으로 정한 사상은 다음과 같다.

$$
T(X)=\sum_{i=1}^mA_iXA_i^\ast,\qquad T^\ast(X)=\sum_{i=1}^mA_i^\ast XA_i
$$

$T$ 는 [양자 채널](quantum-channels.md) 문서의 Kraus 표현을 가진 완전 양성 사상이고, $A_i$ 를 Kraus 연산자라 한다.

## 이중 확률 사상

$T(I)=I$ 이고 $T^\ast(I)=I$ 이면 $T$ 를 **이중 확률 사상(doubly stochastic map)** 이라 한다. $A_1=I/\sqrt2$, $A_2=\begin{pmatrix}0&1\cr 1&0\end{pmatrix}/\sqrt2$ 이면 $T(I)=T^\ast(I)=I$ 이다.

## 척도화

가역행렬 $L,R$ 에 대해 Kraus 연산자를 $LA_iR$ 로 바꾼 사상을 $T$ 의 **척도화(scaling)** 라 한다. 모든 $\varepsilon\gt 0$ 에서 $\Vert T^\prime(I)-I\Vert+\Vert T^{\prime\ast}(I)-I\Vert\le\varepsilon$ 인 척도화 $T^\prime$ 이 존재하면 $T$ 를 **근사 척도화 가능(approximately scalable)** 이라 한다. 직관 절의 $\begin{pmatrix}1&1\cr 0&1\end{pmatrix}$ 는 근사 척도화 가능하지만 정확히 이중 확률로 바뀌지는 않는다.

## 용량과 줄어드는 부분공간

$T$ 의 **용량(capacity)** 은 다음 값이다[^1].

$$
\mathrm{cap}(T)=\inf_{X\succ 0}\frac{\det T(X)}{\det X}
$$

$X\succ 0$ 은 $X$ 가 양의 정부호라는 뜻이다. 부분공간 $V\subseteq\mathbb C^n$ 이 $\dim\big(\sum_iA_iV\big)\lt\dim V$ 를 만족하면 **줄어드는 부분공간(shrunk subspace)** 이라 한다. 개요의 둘째 행이 $0$ 인 두 행렬에서는 $V=\mathbb C^2$ 가 $\sum_iA_iV\subseteq\mathrm{span}(e_1)$ 로 줄어든다.

# 성질

## Gurvits 정리

다음은 동치다[^1]. 이것을 연산자 척도화에 대한 Gurvits 정리(Gurvits' theorem)라 한다.

1. $T$ 는 근사 척도화 가능하다.
2. $\mathrm{cap}(T)\gt 0$ 이다.
3. 줄어드는 부분공간이 없다.
4. 모든 양의 준정부호 $X$ 에서 $\mathrm{rank}\thinspace T(X)\ge\mathrm{rank}\thinspace X$ 이다.

$A_{jk}=\sqrt{a_{jk}}E_{jk}$ 의 경우 줄어드는 부분공간은 좌표 부분공간으로 고를 수 있고, 3 은 $a_{jk}\gt 0$ 인 자리로 만든 이분 그래프가 Hall 조건을 만족한다는 것, 곧 행렬의 [영구식](permanent.md)이 양수라는 것이 된다.

## 연산자 Sinkhorn 반복

$T(I)$ 를 $I$ 로 맞추는 $L=T(I)^{-1/2}$ 과 $T^\ast(I)$ 를 $I$ 로 맞추는 $R=T^\ast(I)^{-1/2}$ 을 번갈아 쓴다. 척도화는 용량을 $\vert\det L\vert^2\vert\det R\vert^2$ 배로 바꾸므로, $L$ 단계는 용량을 $1/\det T(I)$ 배로 늘린다.

$R$ 단계 뒤에는 $T^\ast(I)=I$ 이므로 $\mathrm{tr}\thinspace T(I)=\mathrm{tr}\thinspace T^\ast(I)=n$ 이고, 산술-기하 평균 부등식으로 $\det T(I)\le 1$ 이다. $X=I$ 를 넣으면 $\mathrm{cap}(T)\le\det T(I)\le 1$ 이다. $\mathrm{cap}(T)\gt 0$ 이면 $L$ 단계마다 곱해지는 $1/\det T(I)$ 들의 곱이 $1/\mathrm{cap}(T)$ 이하이므로 $\det T(I)\to 1$ 이고, 대각합이 $n$ 이라 $T(I)\to I$ 다[^1].

A. Garg, L. Gurvits, R. Oliveira, A. Wigderson 은 성분이 정수인 $A_i$ 에서 $\mathrm{cap}(T)\gt 0$ 이면 용량이 $n$ 과 성분 크기의 다항식으로 아래로 유계임을 보였다. 그래서 반복 횟수가 다항식으로 유계이고, 1 에서 4 의 판정이 결정적 다항시간에 된다[^2].

## 비가환 계수

미지수 $x_1,\dots,x_m$ 을 서로 가환하지 않는 변수로 보고 $\sum_ix_iA_i$ 의 계수를 자유 비가환체(free skew field) 위에서 잰 값을 **비가환 계수(non-commutative rank)** 라 한다. $\sum_ix_iA_i$ 의 비가환 계수가 $n$ 인 것은 줄어드는 부분공간이 없다는 것과 동치다[^2]. 미지수에 수를 넣어 가역이 될 수 있으면 비가환 계수도 $n$ 이지만, 역은 성립하지 않는다.

# 활용

- Edmonds 문제(Edmonds' problem). $\sum_ix_iA_i$ 가 어떤 수 $x$ 에서 가역인지 묻는 문제는 [Schwartz–Zippel 보조정리](schwartz-zippel-lemma.md)로 무작위 다항시간에 풀리고 결정적 다항시간 알고리즘은 알려지지 않았다[^2][^3]. 비가환 판본은 연산자 척도화로 결정적 다항시간에 풀린다[^2].
- [혼합 판별식](mixed-discriminants.md). 양의 준정부호 행렬의 조를 연산자 척도화로 이중 확률 조에 가깝게 바꾸고 Bapat 추측의 하한을 쓰면, 혼합 판별식이 $e^n$ 배 안에서 결정적으로 추정된다.
- Brascamp–Lieb 부등식(Brascamp–Lieb inequality). 부등식이 유한한 상수를 갖는지와 그 상수의 계산이 연산자 척도화의 용량 문제로 바뀐다[^4].
- [기하학적 불변량 이론](geometric-invariant-theory.md). 행렬의 조에 $\mathrm{SL}\_n\times\mathrm{SL}\_n$ 이 왼쪽과 오른쪽 곱으로 작용할 때, 조가 영뿔(null cone)에 들지 않는 것이 $\mathrm{cap}(T)\gt 0$ 과 동치다[^2].

[^1]: L. Gurvits, "Classical complexity and quantum entanglement", Journal of Computer and System Sciences 69 (2004), 448–484.
[^2]: A. Garg, L. Gurvits, R. Oliveira, A. Wigderson, "Operator scaling: theory and applications", Foundations of Computational Mathematics 20 (2020), 223–290.
[^3]: J. Edmonds, "Systems of distinct representatives and linear algebra", Journal of Research of the National Bureau of Standards 71B (1967), 241–245.
[^4]: A. Garg, L. Gurvits, R. Oliveira, A. Wigderson, "Algorithmic and optimization aspects of Brascamp–Lieb inequalities, via operator scaling", Geometric and Functional Analysis 28 (2018), 100–145.

# 연관 문서

## 선수지식

- [Sinkhorn 알고리즘](sinkhorn.md)
- [양자 채널](quantum-channels.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algorithms #linear_algebra #complexity
