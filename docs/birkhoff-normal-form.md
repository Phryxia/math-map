# Birkhoff 정규형

# 개요

**Birkhoff 정규형(Birkhoff normal form)** 은 거의 풀리는 역학계의 운동방정식을 좌표를 바꿔 풀리는 부분과 남는 작은 부분으로 가른 꼴이다. 태양 둘레를 도는 행성에 다른 행성의 인력이 조금 더해지면, 궤도의 크기가 아주 긴 시간 동안 얼마나 변하는지가 문제가 된다. Birkhoff 정규형은 좌표를 바꿔 궤도 위의 위치에 따라 흔들리는 항을 교란의 높은 차수로 밀어내고, 남은 항만으로 그 변화를 계산한다.

# 직관

[적분가능계](integrable-systems.md)에 작은 교란을 더한 [Hamilton 역학](hamiltonian-mechanics.md)의 Hamilton 함수

$$
H(I,\theta)=H\_0(I)+\varepsilon H\_1(I,\theta)
$$

를 본다. $I$ 는 작용 변수(action variable), $\theta$ 는 각 변수(angle variable)이고 $\varepsilon$ 은 작은 양수다. 적분가능계에서는 작용 변수가 상수다. 교란 $\varepsilon H\_1$ 을 더하면 $I$ 가 얼마나 움직이는지 묻는다.

정준방정식이 $\dot I=-\varepsilon\partial\_\theta H\_1$ 이므로 $I$ 의 변화율이 $\varepsilon$ 정도다. 시간 $1/\varepsilon$ 이면 $I$ 가 $O(1)$ 만큼 움직일 수 있다. 그런데 $H\_1$ 을 각 변수로 [Fourier 급수](fourier-series.md) $H\_1=\sum\_k h\_k(I)e^{ik\cdot\theta}$ 로 적으면, $\theta$ 가 속도 $\omega(I)=\partial\_IH\_0$ 로 돌므로 $k\ne0$ 인 항은 진동수 $k\cdot\omega$ 로 진동한다. 진동하는 항은 시간 평균이 $0$ 이어서 긴 시간에는 상쇄될 것이다. 평균이 남는 것은 $k=0$ 항뿐이다.

상쇄를 계산으로 확인하는 대신 좌표를 바꿔 그 항을 없앤다. 생성함수(generating function) $\varepsilon\chi(I,\theta)$ 의 정준변환(canonical transformation)은 $H$ 를

$$
H\_0(I)+\varepsilon\bigl(H\_1+\lbrace H\_0,\chi\rbrace\bigr)+O(\varepsilon^2)
$$

로 보낸다. 여기서 $\lbrace\cdot,\cdot\rbrace$ 는 Poisson 괄호(Poisson bracket)이고, $H\_0$ 이 $I$ 만의 함수이므로 $\lbrace H\_0,\chi\rbrace=\omega(I)\cdot\partial\_\theta\chi$ 다. $\chi=\sum\_kc\_k(I)e^{ik\cdot\theta}$ 로 두고 $k\ne0$ 인 항의 계수를 $0$ 으로 만들려면

$$
h\_k+i\thinspace(k\cdot\omega)\thinspace c\_k=0,\qquad c\_k=\frac{ih\_k}{k\cdot\omega}
$$

이어야 한다.

이 공식이 두 자리에서 막힌다. $k\cdot\omega(I)=0$ 이면 $c\_k$ 가 정의되지 않아 그 항을 없앨 수 없다. $k\cdot\omega$ 가 $0$ 이 아니지만 작으면 $c\_k$ 가 커져 변환이 작은 교란이 아니게 된다. 없앨 수 있는 항만 없애고 나머지를 그대로 둔 결과가 정규형이다.

# 정의

## 공명 격자

$\omega\in\mathbb R^n$ 에 대해

$$
\mathcal M(\omega)=\lbrace k\in\mathbb Z^n\thinspace :\thinspace k\cdot\omega=0\rbrace
$$

을 $\omega$ 의 **공명 격자(resonance lattice)** 라 한다. $\mathcal M(\omega)=\lbrace 0\rbrace$ 이면 $\omega$ 를 **비공명(nonresonant)** 이라 한다. $\omega=(1,1)$ 이면 $\mathcal M(\omega)=\lbrace(m,-m):m\in\mathbb Z\rbrace$ 이고, $\omega=(1,\sqrt 2)$ 이면 $\sqrt 2$ 가 [무리수](irrational-numbers.md)이므로 비공명이다.

## r 차 정규형

$H=H\_0+\varepsilon H\_1+\varepsilon^2H\_2+\dots$ 가 $r$ 차 **정규형(normal form)** 이라는 것은 $j\le r$ 마다 $H\_j$ 의 Fourier 전개가 $\mathcal M(\omega)$ 의 모드만 쓴다는 뜻이다. 곧

$$
H\_j(I,\theta)=\sum\_{k\in\mathcal M(\omega)}h\_{j,k}(I)e^{ik\cdot\theta}
$$

이다. 비공명이면 $j\le r$ 에서 $H\_j$ 가 $I$ 만의 함수다.

$\omega=(1,1)$ 로 고정하고 $H\_1=\cos(\theta\_1-\theta\_2)+\cos\theta\_1$ 이라 하자. $\cos(\theta\_1-\theta\_2)$ 의 모드 $\pm(1,-1)$ 은 공명 격자에 들고 $\cos\theta\_1$ 의 모드 $\pm(1,0)$ 은 들지 않는다. 직관 절의 공식으로 $c\_{\pm(1,0)}=\pm i/2$ 이고 $\chi=-\sin\theta\_1$ 이다. 실제로 $\omega\cdot\partial\_\theta\chi=-\cos\theta\_1$ 이 $\cos\theta\_1$ 을 지우고, 1 차 정규형 $H\_0+\varepsilon\cos(\theta\_1-\theta\_2)$ 가 남는다.

## 정규화 변환

$r$ 차까지 정규형으로 만드는 **정규화 변환(normalizing transformation)** 은 생성함수 $\varepsilon\chi\_1+\dots+\varepsilon^r\chi\_r$ 의 정준변환을 차례로 합성한 것이다. 각 단계에서 $\chi\_j$ 는 앞 단계까지 남은 공명이 아닌 모드를 소거하는 방정식으로 정해지고, 그 방정식이 직관 절의 $c\_k$ 공식이다. 위 예에서는 $\chi\_1=-\sin\theta\_1$ 이다.

# 성질

## 1차 평균화

$H\_1$ 이 $\lvert k\rvert\le K$ 인 Fourier 모드만 갖고, 작용 변수의 영역에서 $0\lt\lvert k\rvert\le K$ 인 모든 $k$ 에 대해 $k\cdot\omega(I)\ne 0$ 이면, $O(\varepsilon)$ 만큼 항등사상과 다른 정준변환으로 $H$ 를

$$
H\_0(I)+\varepsilon\bar H\_1(I)+O(\varepsilon^2)
$$

로 바꿀 수 있다. $\bar H\_1$ 은 $H\_1$ 의 각 변수 평균이다.

증명의 요지. $\chi\_1$ 의 Fourier 계수를 $c\_k=ih\_k/(k\cdot\omega)$ 로 잡는다. 가정에서 $k\ne0$ 인 모드의 분모가 $0$ 이 아니고, 모드가 유한 개이므로 $\chi\_1$ 은 유한합이다.

새 변수에서 $\dot I=O(\varepsilon^2)$ 이므로 시간 $1/\varepsilon$ 동안 $I$ 의 변화가 $O(\varepsilon)$ 에 머문다. 교란의 차수만 보고 얻은 $O(1)$ 추정이 한 차수 좋아진다.

## 소분모와 유한 차수

모드를 제한하지 않으면 $\lvert k\rvert$ 가 커질 때 $k\cdot\omega$ 가 $0$ 에 가까운 $k$ 가 나타나므로 $r$ 을 키울 때 분모가 작아진다. $\omega$ 가 Diophantine 조건(Diophantine condition)

$$
\lvert k\cdot\omega\rvert\ge\frac{\gamma}{\lvert k\rvert^{\tau}}\qquad(k\ne 0)
$$

을 만족하면 $\lvert c\_k\rvert\le\lvert h\_k\rvert\lvert k\rvert^{\tau}/\gamma$ 로 제한되지만, 단계마다 미분이 들어가 $\chi\_r$ 의 크기가 $r$ 에 대해 계승처럼 자란다. 그래서 급수가 수렴하지 않고 전개를 유한한 $r$ 에서 끊는다. 이 조건은 [Diophantine 근사](diophantine-approximation.md)에서 쓰는 조건과 같은 꼴이다.

$H$ 가 해석적이고 $\omega$ 가 Diophantine 조건을 만족하면, $r$ 을 $\varepsilon^{-a}$ 꼴로 고르는 최적 절단에서 나머지 항이 $\exp(-c\thinspace\varepsilon^{-b})$ 로 작아진다[^1].

증명의 요지. $r$ 차 나머지의 크기 상한이 $r!\thinspace C^r\varepsilon^{r+1}$ 꼴이다. $r$ 을 키우면 $r!$ 이 커지고 줄이면 $\varepsilon^{r+1}$ 이 덜 작아진다. 두 효과가 균형을 이루는 $r\approx 1/(C\varepsilon)$ 에서 상한이 지수적으로 작은 값이 된다.

## 적분가능계와의 거리

정규형 전개가 수렴하지 않으므로 교란된 계가 적분가능계와 정준변환으로 같다고 할 수 없다. 전개가 주는 것은 유한한 시간 동안의 근사다. 그 시간이 지수적으로 길다는 것이 [Nekhoroshev 추정](nekhoroshev-estimate.md)이고, 전개를 특정 작용 값에서 수렴시켜 불변 원환면을 얻는 것이 [Kolmogorov–Arnold–Moser 정리](kam-theorem.md)다.

# 활용

- 단열 불변량(adiabatic invariant). 느리게 변하는 매개변수를 가진 계에서 작용 변수가 긴 시간 거의 보존된다는 결과를 1차 평균화로 얻는다. 매개변수의 변화율을 $\varepsilon$ 으로 두면 정규형의 나머지 항이 보존의 오차가 된다.
- 타원형 고정점 근방. 고정점 근방에서 Hamilton 함수를 정규형으로 바꾸면 2 차 항은 $n$ 개의 조화진동자의 합이고, 진동수가 비공명이면 고차 항이 진폭 $\tau\_j=(x\_j^2+y\_j^2)/2$ 만의 함수가 되어 진동수의 진폭 의존을 준다. 진동수가 Diophantine 조건을 만족하고 그 의존이 비퇴화이면 고정점 근방의 궤도가 지수적으로 긴 시간 근방에 머문다.
- 천체역학의 공명. 평균 운동이 정수비에 가까운 두 천체에서는 그 비에 해당하는 $k$ 가 공명 격자에 들어가고, 정규형에 남는 항이 공명 폭을 준다.

[^1]: G. Benettin, L. Galgani, A. Giorgilli, *A proof of Nekhoroshev's theorem for the stability times in nearly integrable Hamiltonian systems*, Celestial Mech. **37** (1985), 1–25. 최적 절단과 지수적으로 작은 나머지 추정을 다룬다. 정규형 전개의 고전적 서술은 V. I. Arnold, *Mathematical Methods of Classical Mechanics*, 2판, Springer, 1989, 10 장이다.

# 연관 문서

## 선수지식

- [적분가능계](integrable-systems.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #analysis #number_theory
