# Coleman 적분

# 개요

복소곡선에서 $\int_P^Q\omega$ 는 두 점을 잇는 경로를 따라 정해진다. $p$ 진수체 위의 곡선에는 그런 경로가 없어서 같은 방법으로 적분을 정의하지 못한다.

**Coleman 적분**은 잔차 원판 안에서 멱급수를 항별로 적분하고, 원판 사이의 적분상수를 Frobenius 작용으로 정한 $p$ 진 적분이다. [Chabauty 방법](chabauty-method.md)에서 유리점을 이 적분의 영점으로 바꾸어 세는 자리에 쓴다.

# 직관

종수 $g$ 인 곡선 $C$ 가 $\mathbb Q_p$ 위에 있고 $p$ 에서 좋은 환원을 갖는다. 환원 사상 $C(\mathbb Q_p)\to C(\mathbb F_p)$ 의 올 하나를 잡으면 국소 매개변수 $t$ 로 $\lbrace t:\vert t\vert_p\lt 1\rbrace$ 과 동일시된다. 이 올 위에서 미분형식 $\omega=f(t)\thinspace dt$ 는 멱급수 $f(t)=\sum_{n\ge0}a_nt^n$ 으로 적히고

$$
\int\omega=\sum_{n\ge0}\frac{a_n}{n+1}t^{n+1}
$$

이 그 원시함수다. 분모의 $n+1$ 은 $p$ 진 절댓값을 $n$ 에 대해 다항식 규모로만 키우므로 이 급수도 같은 올 위에서 수렴한다. 올 하나 안에서는 적분이 이렇게 나온다.

올 두 개를 잇는 자리에서 막힌다. $\mathbb Q_p$ 는 완전 비연결이라 서로 다른 올을 잇는 경로가 없고, 각 올 위의 원시함수는 상수만큼 다르게 잡을 수 있다. 올이 $\char35{}C(\mathbb F_p)$ 개 있으면 정해지지 않은 상수도 그만큼 있다.

상수를 정할 것을 곡선 자체에서 찾는다. Frobenius 올림 $\phi$ 는 $\mathbb F_p$ 위에서 $x\mapsto x^p$ 인 사상을 $\mathbb Q_p$ 로 올린 것이고, 올을 올로 보낸다. 적분이 $\phi$ 와 가환하도록, 곧 $\phi$ 로 옮긴 두 점 사이의 $\phi^\ast\omega$ 적분이 원래 적분과 같도록 요구한다. 이 요구는 상수들에 선형 조건을 주고, $\phi$ 가 de Rham 코호몰로지에 작용할 때 고유값의 절댓값이 $p^{1/2}$ 이어서 $1$ 이 고유값이 아니므로 조건의 해가 하나다.

# 정의

## 잔차 원판과 국소 원시함수

$C$ 가 $\mathbb Z_p$ 위에서 좋은 환원을 갖는 곡선이고 환원 사상이 $\mathrm{red}:C(\mathbb Q_p)\to C(\mathbb F_p)$ 다. 점 $\bar P\in C(\mathbb F_p)$ 의 올 $U\_{\bar P}=\mathrm{red}^{-1}(\bar P)$ 를 **잔차 원판**이라 한다. $U\_{\bar P}$ 위의 국소 매개변수 $t$ 를 잡고 $\omega$ 를 $t$ 의 멱급수로 적어 항별로 적분한 것이 **국소 원시함수**다.

## Coleman 적분

$C$ 위의 $1$ 형식 $\omega$ 와 두 점 $P,Q\in C(\mathbb Q_p)$ 에 대해 다음 넷을 만족하는 값 $\int_P^Q\omega$ 가 **Coleman 적분**이다.[^1]

- $\omega$ 에 대해 선형이고 $\int_P^Q\omega+\int_Q^R\omega=\int_P^R\omega$ 다.
- 함수 $f$ 에 대해 $\int_P^Q df=f(Q)-f(P)$ 다.
- 각 잔차 원판 위에서 $Q\mapsto\int_P^Q\omega$ 는 $t$ 의 $p$ 진 해석함수이고 그 미분이 $\omega$ 다.
- Frobenius 올림 $\phi$ 에 대해 $\int_{\phi(P)}^{\phi(Q)}\omega=\int_P^Q\phi^\ast\omega$ 다.

## 반복 적분

$1$ 형식의 열 $\omega_1,\dots,\omega_n$ 에 대해

$$
\int_P^Q\omega_1\omega_2\cdots\omega_n=\int_P^Q\Bigl(\int_P^{(\cdot)}\omega_1\cdots\omega_{n-1}\Bigr)\omega_n
$$

을 **반복 Coleman 적분**이라 한다. $n=1$ 이 위 정의이고, 안쪽 적분을 함수로 보아 다시 적분한다.

# 성질

## 유일성

**정리.** 좋은 환원을 갖는 곡선에서 위 네 조건을 만족하는 적분이 유일하게 존재한다.[^1]

증명의 요지. 존재는 각 잔차 원판에서 국소 원시함수를 잡고 상수를 정하는 것이다. 상수들의 열 $c$ 에 대해 넷째 조건은 $\phi$ 가 de Rham 코호몰로지 $H^1\_{\mathrm{dR}}(C)$ 에 유도하는 작용 $\phi^\ast$ 로 $(\phi^\ast-1)c=v$ 꼴의 선형방정식이 된다. Weil 추측이 $\phi^\ast$ 의 고유값 절댓값을 $p^{1/2}$ 로 주므로 $\phi^\ast-1$ 이 가역이고 $c$ 가 하나로 정해진다. ∎

이 논법에서 $\phi^\ast$ 의 고유값이 $1$ 이 아니라는 점만 쓴다. 나쁜 환원에서는 $1$ 이 고유값이 될 수 있어 적분이 상수만큼 자유롭다.

## 영점의 개수

**정리.** $\omega$ 가 $C$ 위의 정칙 $1$ 형식이고 $p\gt 2g$ 이면 함수 $Q\mapsto\int_P^Q\omega$ 의 영점 개수가

$$
\char35{}C(\mathbb F_p)+2g-2
$$

이하다.[^2]

증명의 요지. 잔차 원판 하나에서 이 함수는 $t$ 의 멱급수이고, [Newton 다각형](newton-polygon.md)이 영점 개수를 $1$ 에 그 원판에서 $\omega$ 가 갖는 영점 차수를 더한 값으로 누른다. $p\gt 2g$ 조건이 급수의 계수에서 분모 $n+1$ 이 주는 손실을 상쇄한다. 원판마다 $1$ 을 더하면 $\char35{}C(\mathbb F_p)$ 이고 영점 차수의 총합이 정칙 $1$ 형식의 인자 차수 $2g-2$ 다. ∎

## 계산

$\phi^\ast$ 의 de Rham 코호몰로지 위의 행렬을 구하면 적분상수가 위 선형방정식으로 나온다. 초타원곡선에서 이 행렬을 Monsky–Washnitzer 코호몰로지의 기저로 계산하는 절차가 [Kedlaya 알고리즘](kedlaya-algorithm.md)이다. 기저 원소의 적분을 얻은 뒤 국소 멱급수를 항별로 더해 임의의 두 점 사이의 값을 낸다.

# 활용

- **Chabauty–Coleman 상한.** 소멸 미분형식 $\omega$ 를 잡으면 $C(\mathbb Q)$ 의 점이 모두 $\int\omega=0$ 을 만족하므로 위 영점 정리가 유리점 개수의 상한을 준다. [Chabauty 방법](chabauty-method.md)의 상한이 이것이다.
- **이차 Chabauty.** 계수가 종수 이상이어서 한 겹 적분으로 조건이 모자랄 때 반복 적분을 쓴다. 이중 적분이 $p$ 진 높이함수를 표현하고, 그 함수의 영점 조건이 조건을 $r\lt g+s-1$ 로 바꾼다.
- **$p$ 진 높이.** 아벨 다양체 위의 $p$ 진 높이쌍이 반복 Coleman 적분으로 적힌다. $p$ 진 $L$ 함수와 잇는 $p$ 진 Birch–Swinnerton-Dyer 추측의 정식화가 이 표현을 쓴다.
- **$p$ 진 다중제타값.** 사영직선에서 $0,1,\infty$ 를 뺀 공간의 반복 적분이 $p$ 진 다중제타값을 준다. 복소수에서 다중제타값을 반복 적분으로 얻는 것과 같은 꼴이다.

[^1]: R. Coleman, "Torsion points on curves and $p$-adic abelian integrals", *Ann. of Math.* **121** (1985), 111–168.
[^2]: R. Coleman, "Effective Chabauty", *Duke Math. J.* **52** (1985), 765–770.

# 연관 문서

## 선수지식

- [Newton 다각형](newton-polygon.md)
- [Chabauty 방법](chabauty-method.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #algebra #complex_analysis #computation
