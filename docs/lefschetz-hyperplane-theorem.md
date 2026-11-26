# Lefschetz 초평면 정리

# 개요

**Lefschetz 초평면 정리(Lefschetz hyperplane theorem)** 는 사영 다양체를 초평면으로 자른 단면이 낮은 차수에서 원래 다양체와 같은 코호몰로지를 갖는다는 정리다. 사영공간 $\mathbb P^3$ 안의 매끄러운 곡면은 차수가 $2$ 이면 사영직선 둘의 곱이고, $3$ 이면 삼차곡면이고, $4$ 이면 [K3 곡면](k3-surfaces.md)인데, 셋 다 첫째 Betti 수가 $0$ 이고 단일 연결이다.

이 정리는 단면의 낮은 차수 위상을 사영공간의 위상으로 정하고, 차수에 따라 달라지는 것은 가운데 차수의 코호몰로지뿐임을 보인다.

# 직관

평면곡선과 공간 속 곡면의 Betti 수를 차수 $d$ 에 따라 늘어놓는다. 매끄러운 평면곡선은 종수가 $(d-1)(d-2)/2$ 이므로 첫째 Betti 수가 $(d-1)(d-2)$ 로 차수와 함께 커진다. $\mathbb P^3$ 안의 매끄러운 곡면은 [Euler 지표](euler-characteristic.md)가 $d^3-4d^2+6d$ 이고 첫째 Betti 수가 늘 $0$ 이므로 둘째 Betti 수가 $d^3-4d^2+6d-2$ 다. $d=1,2,3,4$ 에서 $1,2,7,22$ 다.

곡선에서는 첫째 차수가 가운데 차수라 차수에 따라 바뀌고, 곡면에서는 첫째 차수가 가운데보다 낮아 $\mathbb P^3$ 의 값 $0$ 에 묶이고 가운데인 둘째 차수만 바뀐다. 단면 $Y$ 와 원래 다양체 $X$ 를 비교하려면 둘의 차이인 $X\setminus Y$ 를 보면 된다. $X\setminus Y$ 는 초평면 밖이라 아핀 공간 안의 닫힌 다양체이고, 아핀 다양체는 차원에 비해 위상이 작다.

# 정의

$X\subset\mathbb P^N$ 을 $n$ 차원 매끄러운 [사영다양체](projective-varieties.md), $H$ 를 초평면이라 하고 $Y=X\cap H$ 가 매끄럽다고 한다. **Lefschetz 초평면 정리** 는 제한 사상 $H^i(X;\mathbb Z)\to H^i(Y;\mathbb Z)$ 가 $i\le n-2$ 이면 동형이고 $i=n-1$ 이면 단사라는 진술이다.

직관 절의 곡면은 $X=\mathbb P^3$, $n=3$ 이다. $i\le 1$ 에서 $H^i(Y)=H^i(\mathbb P^3)$ 이므로 $H^1(Y)=0$ 이고, $i=2$ 에서 $H^2(\mathbb P^3)=\mathbb Z\to H^2(Y)$ 는 단사다. 평면곡선은 $X=\mathbb P^2$, $n=2$ 이고 정리는 $H^0$ 의 동형과 $H^1(\mathbb P^2)=0\to H^1(Y)$ 의 단사만 말한다.

호모토피 판본은 $\pi_i(X,Y)=0$ $(i\le n-1)$ 이다. 그래서 $n\ge 3$ 이면 $\pi_1(Y)\cong\pi_1(X)$ 다.

# 성질

## 아핀 다양체의 Morse 이론

정리(Andreotti–Frankel). $\mathbb C^M$ 안의 $n$ 차원 매끄러운 아핀 다양체 $V$ 는 차원이 $n$ 이하인 [CW 복합체](cw-complexes.md)와 호모토피 동치다[^1]. 그래서 $k\gt n$ 이면 $H_k(V;\mathbb Z)=0$ 이다.

증명의 요지. 일반적인 점 $p$ 를 잡아 $f(z)=\vert z-p\vert^2$ 를 $V$ 위의 [Morse 함수](morse-theory.md)로 쓴다. 임계점에서 실 Hesse 형식 $h$ 는 접공간의 복소구조 $J$ 에 대해 $h(v,v)+h(Jv,Jv)=4\vert v\vert^2$ 을 만족한다. 좌변은 $f$ 의 복소 Hesse 형식의 $4$ 배이고, 정칙 매장으로 제한해도 $\vert z-p\vert^2$ 의 복소 Hesse 형식은 $\vert v\vert^2$ 그대로다. $h$ 가 음의 정부호인 부분공간 $W$ 는 $W\cap JW=0$ 이므로 실차원이 $n$ 이하이고, 모든 임계점의 지표가 $n$ 이하다.

## 초평면 정리의 증명

$X\setminus Y$ 는 $\mathbb P^N\setminus H\cong\mathbb C^N$ 안의 $n$ 차원 매끄러운 아핀 다양체다. [Poincaré 쌍대성](poincare-duality.md)의 상대 판본(Lefschetz 쌍대성, Lefschetz duality)으로 다음이 나온다.

$$
H^i(X,Y;\mathbb Z)\cong H_{2n-i}(X\setminus Y;\mathbb Z)
$$

$2n-i\gt n$, 곧 $i\lt n$ 이면 Andreotti–Frankel 정리로 우변이 $0$ 이다. 쌍 $(X,Y)$ 의 긴 완전열에서 $H^i(X,Y)=H^{i+1}(X,Y)=0$ 이면 $H^i(X)\to H^i(Y)$ 가 동형이므로 $i\le n-2$ 에서 동형이고, $H^{n-1}(X,Y)=0$ 이므로 $i=n-1$ 에서 단사다.

같은 논법이 매끄러운 사영 다양체 $X$ 안의 풍부한 매끄러운 인자 $Y$ 에도 그대로 쓰인다. 충분히 큰 거듭제곱의 매장 아래에서 $Y$ 의 배수가 초평면 단면이 되어 $X\setminus Y$ 가 아핀이기 때문이다.

## 초곡면의 코호몰로지

$\mathbb P^{n+1}$ 안의 매끄러운 초곡면 $Y$ 를 차수 $d$ 의 Veronese 매장으로 보면 초평면 단면이다. 그래서 $i\lt n$ 에서 $H^i(Y;\mathbb Z)\cong H^i(\mathbb P^{n+1};\mathbb Z)$ 이고, $i\gt n$ 에서는 Poincaré 쌍대성으로 정해진다. 남은 $H^n(Y)$ 의 계수는 Euler 지표에서 나온다. $n\ge 2$ 이면 $Y$ 는 단일 연결이다.

직관 절의 $d^3-4d^2+6d$ 는 $Y$ 의 접다발에 대한 [특성류](characteristic-classes.md) 계산에서 나온다. $c(T_Y)=(1+H)^4/(1+dH)$ 의 $2$ 차 항은 $(d^2-4d+6)H^2$ 이고, $H^2$ 의 차수가 $d$ 이므로 Euler 지표가 $d(d^2-4d+6)$ 이다.

## Picard 군

정리(Grothendieck–Lefschetz). 풍부한 매끄러운 인자 $Y\subset X$ 가 $\dim Y\ge 3$ 이면 $\mathrm{Pic}(X)\to\mathrm{Pic}(Y)$ 가 동형이다[^2].

$\dim Y=2$ 이면 이 동형이 성립하지 않는다. $\mathbb P^3$ 의 이차곡면은 $\mathrm{Pic}=\mathbb Z^2$ 다. 차수 $4$ 이상의 매우 일반적인 곡면에서는 $\mathrm{Pic}=\mathbb Z H$ 이다([Noether–Lefschetz 정리](noether-lefschetz-theorem.md)).

# 활용

- Fano 다양체의 Picard 수. $\mathbb P^4$ 의 매끄러운 삼차와 사차 초곡면은 Grothendieck–Lefschetz 정리로 $\mathrm{Pic}=\mathbb Z$ 이므로 [Fano 다양체](fano-varieties.md) 분류 표의 Picard 수 $1$ 인 족에 든다.
- Hodge 이론적 증명. [Kodaira 소멸 정리](kodaira-vanishing-theorem.md)의 Akizuki–Nakano 판본으로 $H^q(X,\Omega^p)\to H^q(Y,\Omega^p\_Y)$ 가 $p+q\le n-2$ 에서 동형임을 보이면, Hodge 분해로 복소계수 판본이 나온다.
- Lefschetz 연필과 소멸 사이클. 초평면 단면을 한 매개변수로 움직이면 특이한 단면에서 [소멸 사이클](vanishing-cycles.md)이 나타나고, 가운데 차수의 코호몰로지가 이 사이클들로 생성된다. [Deligne 의 Weil 추측 증명](deligne-weil-conjectures.md)은 에탈 코호몰로지에서 같은 구조를 쓴다.
- 기본군의 계산. 고차원 다양체의 기본군을 충분히 일반적인 곡면 단면의 기본군으로 줄여 계산한다. 평면곡선의 여집합에 대한 Zariski–van Kampen 방법이 이 판본을 쓴다.

[^1]: A. Andreotti, T. Frankel, "The Lefschetz theorem on hyperplane sections", *Annals of Mathematics* 69 (1959), 713–717.

[^2]: R. Lazarsfeld, *Positivity in Algebraic Geometry I*, Ergebnisse der Mathematik 48, Springer, 2004, Chapter 3.

# 연관 문서

## 선수지식

- [Morse 이론](morse-theory.md)
- [Poincaré 쌍대성](poincare-duality.md)

## 더 알아보기

- [Noether–Lefschetz 정리](noether-lefschetz-theorem.md)

#algebraic_topology #algebra #complex_analysis
