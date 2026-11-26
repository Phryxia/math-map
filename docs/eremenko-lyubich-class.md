# Eremenko–Lyubich 류

# 개요

**Eremenko–Lyubich 류(Eremenko–Lyubich class)** 는 임계값과 점근값을 모은 집합이 유계인 초월 전해석함수 전체다. 다항식을 되풀이해 적용하면 무한대로 달아나는 점들이 열린 집합을 이루지만, 초월함수 $z+1+e^{-z}$ 와 $e^z/4$ 는 둘 다 무한대로 달아나는 점을 가지면서도 그 점들 근처의 모양이 전혀 다르다. 앞의 함수에서는 오른쪽 반평면 전체가 달아나고, 뒤의 함수에서는 실수 $3$ 이 달아나는데 그 바로 옆에는 유한한 점으로 끌려가는 점이 있다.

Eremenko–Lyubich 류는 이 차이를 역함수의 특이값이 유계인지로 가르고, 유계이면 달아나는 점이 모두 [Julia 집합](julia-set.md)에 있다는 것을 보인다.

# 직관

다항식 $z^2$ 에서 $\vert z\vert\gt 1$ 인 점은 되풀이 제곱하면 무한대로 가고, 이 점들은 열린 집합을 이루어 [Fatou 성분](fatou-components.md) 하나가 된다. 초월 전해석함수 $f(z)=z+1+e^{-z}$ 에서도 같은 일이 생긴다. $\mathrm{Re}\thinspace z=x\gt 0$ 이면 $\mathrm{Re}\thinspace f(z)\ge x+1-e^{-x}\gt x$ 이고, 실수부가 한 번에 $1-e^{-x}$ 이상씩 커지므로 오른쪽 반평면의 점은 모두 무한대로 간다.

$g(z)=e^z/4$ 는 다르다. 실수축에서 $4x=e^x$ 의 해는 $x\approx 0.357$ 과 $x\approx 2.153$ 이고, $2.153$ 보다 큰 실수는 $g$ 를 되풀이하면 무한대로 간다. $x=3$ 에서는 $g(3)\approx 5.02$, $g(5.02)\approx 38$ 로 커진다.

$3$ 에서 위로 $y$ 만큼 옮긴 점은 $g(3+iy)=5.02\thinspace e^{iy}$ 로 간다. $y$ 가 $0$ 에서 $\pi$ 까지 가면 상은 반지름 $5.02$ 인 반원을 따라 $5.02$ 에서 $-5.02$ 로 옮겨 가고, $g(-5.02)\approx 0.0017$ 은 되풀이하면 끌어당기는 고정점 $0.357$ 로 간다. 그러므로 $3$ 근처에 무한대로 가는 점과 $0.357$ 로 가는 점이 함께 있고, 더 깊은 반복에서는 더 가까운 곳에서 같은 일이 생긴다.

두 함수의 차이는 역함수의 특이값에 있다. $f'(z)=1-e^{-z}$ 는 $z=2\pi ik$ 에서 $0$ 이고 그 임계값 $2+2\pi ik$ 는 유계가 아니다. $g$ 는 임계점이 없고 특이값은 점근값 $0$ 하나뿐이다.

# 정의

## 특이값과 두 함수류

초월 전해석함수 $f$ 의 임계값과 유한 점근값을 모두 모은 집합의 닫힘을 $\mathrm{sing}(f^{-1})$ 이라 한다. 이것은 [역함수의 특이점](singularities-of-inverse-functions.md)이 놓이는 유한한 값 전체의 닫힘이다.

$\mathrm{sing}(f^{-1})$ 이 유계인 초월 전해석함수 전체를 **Eremenko–Lyubich 류** $\mathcal B$ 라 한다. $\mathrm{sing}(f^{-1})$ 이 유한집합인 것 전체를 **Speiser 류(Speiser class)** $\mathcal S$ 라 한다. 직관 절의 $g(z)=e^z/4$ 는 $\mathrm{sing}(g^{-1})=\lbrace 0\rbrace$ 이므로 $\mathcal S$ 에 들고, $f(z)=z+1+e^{-z}$ 는 $\mathcal B$ 에 들지 않는다. $\sin z$ 는 임계값이 $\pm 1$ 뿐이고 유한 점근값이 없으므로 $\mathcal S$ 에 든다.

## Fatou 집합과 탈출 집합

초월 전해석함수 $f$ 의 반복 $f^n$ 이 점 $z$ 의 어떤 근방에서 정규족을 이루면 $z$ 는 **Fatou 집합** $F(f)$ 에 든다고 하고, 그 여집합을 **Julia 집합** $J(f)$ 라 한다. $f^n(z)\to\infty$ 인 점 전체를 **탈출 집합(escaping set)** $I(f)$ 라 한다.

직관 절의 $f(z)=z+1+e^{-z}$ 에서 오른쪽 반평면은 $I(f)\cap F(f)$ 에 포함된다. $g(z)=e^z/4$ 에서 실수 $3$ 은 $I(g)$ 에 들고, 근방의 점들이 $\infty$ 와 $0.357$ 로 갈라지므로 반복이 정규족을 이루지 못해 $J(g)$ 에 든다.

# 성질

## Eremenko–Lyubich 정리

**정리(Eremenko–Lyubich, 1992).** $f\in\mathcal B$ 이면 $I(f)\subseteq J(f)$ 다[^1].

그러므로 $\mathcal B$ 의 함수는 무한대로 달아나는 Fatou 성분을 갖지 않는다. 직관 절의 $z+1+e^{-z}$ 는 그런 성분을 가지므로 $\mathcal B$ 에 들 수 없다.

증명의 요지는 로그 변수 변환(logarithmic change of variables)이다. $R$ 을 $\mathrm{sing}(f^{-1})\cup\lbrace f(0)\rbrace$ 이 원판 $\vert w\vert\lt R$ 에 들도록 잡으면, $\lbrace\vert w\vert\gt R\rbrace$ 의 역상의 각 연결 성분 위에서 $f$ 는 구멍 뚫린 근방 $\lbrace\vert w\vert\gt R\rbrace$ 의 보편 덮개다. 그래서 $f(e^t)=e^{F(t)}$ 인 $F$ 가 각 성분의 로그 위에서 반평면 $\mathrm{Re}\thinspace w\gt\log R$ 로 가는 등각사상이 되고, Koebe 사분의 일 정리로 다음이 나온다.

$$
\vert F'(t)\vert\ge\frac{\mathrm{Re}\thinspace F(t)-\log R}{4\pi}
$$

달아나는 궤도에서는 $\mathrm{Re}\thinspace F$ 가 커지므로 반복의 도함수가 무한히 커지고, 그 점의 근방에서 반복이 정규족을 이룰 수 없다.

## 방황 영역이 없는 Speiser 류

**정리(Eremenko–Lyubich; Goldberg–Keen).** $f\in\mathcal S$ 이면 $F(f)$ 는 방황 영역을 갖지 않는다[^1][^2].

유리함수에 대한 Sullivan 의 방황 영역 정리와 같은 꼴이고, 증명도 같은 방법을 쓴다. 특이값이 유한 개이면 $f$ 를 준등각 변형한 함수들이 유한 차원의 족을 이루고, 방황 영역이 있으면 무한 차원의 변형이 생겨 모순이다.

$\mathcal B$ 로 넓히면 이 결론은 성립하지 않는다. Bishop 은 준등각 접기(quasiconformal folding)로 방황 영역을 갖는 $\mathcal B$ 의 함수를 만들었다[^3].

## 동적 반직선

$g(z)=e^z/4$ 에서 실수 $2.153$ 보다 큰 반직선은 탈출 집합에 들고, 무한대로 가는 곡선이다. Eremenko 추측(Eremenko's conjecture)은 초월 전해석함수의 탈출 집합의 연결 성분이 모두 유계가 아니라는 진술이다.

위수가 유한한 $f\in\mathcal B$ 에서는 탈출 집합의 모든 점이 탈출 집합 안의 곡선으로 무한대와 이어진다. 같은 논문은 탈출 집합이 곡선을 하나도 포함하지 않는 $\mathcal B$ 의 함수도 만들었다[^4].

# 활용

- 지수족 $\lambda e^z$. 특이값이 점근값 $0$ 하나이므로 $\mathcal S$ 에 들고, 유리함수 동역학의 이차 다항식족처럼 매개변수 $\lambda$ 의 공간에서 쌍곡 성분과 분기 집합을 연구하는 기본 예가 된다.
- [Fatou 성분의 분류](fatou-components.md)의 초월 판. $\mathcal S$ 에서는 방황 영역이 없으므로 Fatou 성분이 모두 최종 주기적이고, $\mathcal B$ 에서는 탈출하는 주기 성분이 없으므로 주기 성분의 유형에서 무한대로 가는 Baker 영역이 빠진다.
- 위수가 작은 함수. [Wiman 최소 절댓값 정리](wiman-minimum-modulus-theorem.md)에 따라 위수가 $1/2$ 미만인 전해석함수는 유한 점근값을 갖지 않으므로, 이런 함수가 $\mathcal B$ 에 드는지는 임계값만으로 정해진다. 점근값의 개수는 [Denjoy–Carleman–Ahlfors 정리](denjoy-carleman-ahlfors-theorem.md)가 위수로 누른다.

[^1]: A. E. Eremenko, M. Yu. Lyubich, "Dynamical properties of some classes of entire functions", *Annales de l'Institut Fourier* 42 (1992), 989–1020.
[^2]: L. R. Goldberg, L. Keen, "A finiteness theorem for a dynamical class of entire functions", *Ergodic Theory and Dynamical Systems* 6 (1986), 183–192.
[^3]: C. J. Bishop, "Constructing entire functions by quasiconformal folding", *Acta Mathematica* 214 (2015), 1–60.
[^4]: G. Rottenfusser, J. Rückert, L. Rempe, D. Schleicher, "Dynamic rays of bounded-type entire functions", *Annals of Mathematics* 173 (2011), 77–125.

# 연관 문서

## 선수지식

- [역함수의 특이점](singularities-of-inverse-functions.md)
- [Fatou 성분의 분류](fatou-components.md)

## 더 알아보기

아직 연결한 문서가 없다.

#complex_analysis #analysis #topology
