# Birkhoff 정규형

# 개요

**Birkhoff 정규형(Birkhoff normal form)** 은 거의 풀리는 역학계의 운동방정식을 좌표를 바꿔 풀리는 부분과 남는 작은 부분으로 가른 꼴이다. 태양 둘레를 도는 행성에 다른 행성의 인력이 조금 더해지면, 궤도의 크기가 아주 긴 시간 동안 얼마나 변하는지가 문제가 된다. Birkhoff 정규형은 좌표를 바꿔 궤도 위의 위치에 따라 흔들리는 항을 교란의 높은 차수로 밀어내고, 남은 항만으로 그 변화를 계산한다.

# 직관

[적분가능계](integrable-systems.md)에 작은 교란을 더한 Hamilton 함수

$$
H(I,\theta)=H\_0(I)+\varepsilon H\_1(I,\theta)
$$

를 본다. $I$ 는 작용 변수, $\theta$ 는 각 변수이고 $\varepsilon$ 은 작은 양수다. 정준변환으로 각 변수에 의존하는 항을 $\varepsilon$ 의 높은 차수로 밀어낸 꼴이 Birkhoff 정규형이다.

각 변수 의존 항을 모두 없애지는 못한다. 공명 조건 $k\cdot\omega(I)=0$ 을 만족하는 Fourier 모드는 없앨 수 없고, 남는 항이 작용 변수의 장시간 거동을 정한다.

적분가능계에서는 작용 변수가 상수다. 교란 $\varepsilon H\_1$ 을 더하면 $\dot I$ 가 얼마나 커지는가.

정준방정식이 $\dot I=-\varepsilon\partial\_\theta H\_1$ 이므로 $I$ 의 변화율이 $\varepsilon$ 정도다. 시간 $1/\varepsilon$ 이면 $I$ 가 $O(1)$ 만큼 움직일 수 있다. 그런데 $H\_1$ 을 각 변수로 Fourier 전개해 $H\_1=\sum\_k h\_k(I)e^{ik\cdot\theta}$ 로 적으면, $\theta$ 가 속도 $\omega(I)=\partial\_IH\_0$ 로 돌므로 $k\ne0$ 인 항은 진동수 $k\cdot\omega$ 로 진동한다. 진동하는 항은 시간 평균이 $0$ 이어서 긴 시간에는 상쇄될 것이다. 평균이 남는 것은 $k=0$ 항뿐이다.

상쇄를 계산으로 확인하는 대신 좌표를 바꿔 그 항을 없앤다. 생성함수 $\varepsilon\chi(I,\theta)$ 의 정준변환은 $H$ 를

$$
H\_0(I)+\varepsilon\bigl(H\_1+\lbrace H\_0,\chi\rbrace\bigr)+O(\varepsilon^2)
$$

로 보내고, $H\_0$ 이 $I$ 만의 함수이므로 $\lbrace H\_0,\chi\rbrace=\omega(I)\cdot\partial\_\theta\chi$ 다. $\chi=\sum\_kc\_k(I)e^{ik\cdot\theta}$ 로 두고 $k\ne0$ 인 항의 계수를 $0$ 으로 만들려면

$$
h\_k+i\thinspace(k\cdot\omega)\thinspace c\_k=0,\qquad c\_k=\frac{ih\_k}{k\cdot\omega}
$$

이어야 한다.

이 공식이 두 자리에서 막힌다. $k\cdot\omega(I)=0$ 이면 $c\_k$ 가 정의되지 않아 그 항을 없앨 수 없다. $k\cdot\omega$ 가 $0$ 이 아니지만 작으면 $c\_k$ 가 커져 변환이 작은 교란이 아니게 된다. 없앨 수 있는 항만 없애고 나머지를 그대로 둔 결과가 정규형이고, 남긴 항의 목록이 $\omega(I)$ 의 공명 구조로 정해진다.

# 정의

## 공명 격자

$\omega\in\mathbb R^n$ 에 대해

$$
\mathcal M(\omega)=\lbrace k\in\mathbb Z^n\thinspace :\thinspace k\cdot\omega=0\rbrace
$$

을 $\omega$ 의 **공명 격자**라 한다. $\mathcal M(\omega)=\lbrace 0\rbrace$ 이면 $\omega$ 를 **비공명**이라 한다.

## r 차 정규형

$H=H\_0+\varepsilon H\_1+\varepsilon^2H\_2+\dots$ 가 $r$ 차 **정규형**이라는 것은 $j\le r$ 마다 $H\_j$ 의 Fourier 전개가 $\mathcal M(\omega)$ 의 모드만 쓴다는 뜻이다. 곧

$$
H\_j(I,\theta)=\sum\_{k\in\mathcal M(\omega)}h\_{j,k}(I)e^{ik\cdot\theta}
$$

이다. 비공명이면 $j\le r$ 에서 $H\_j$ 가 $I$ 만의 함수다.

## 정규화 변환

$r$ 차까지 정규형으로 만드는 정준변환은 생성함수 $\varepsilon\chi\_1+\dots+\varepsilon^r\chi\_r$ 의 합성이다. 각 단계에서 $\chi\_j$ 는 앞 단계까지 남은 비공명 모드를 소거하는 방정식으로 정해지고, 그 방정식이 위의 $c\_k$ 공식이다.

# 성질

## 1차 평균화

**정리.** $\omega(I)$ 가 비공명이고 $H\_1$ 이 매끄러우면, $O(\varepsilon)$ 의 정준변환으로 $H$ 를

$$
H\_0(I)+\varepsilon\bar H\_1(I)+O(\varepsilon^2)
$$

로 바꿀 수 있다. $\bar H\_1$ 은 $H\_1$ 의 각 변수 평균이다.

증명의 요지. $\chi\_1$ 의 Fourier 계수를 $c\_k=ih\_k/(k\cdot\omega)$ 로 잡는다. 비공명이므로 $k\ne0$ 에서 분모가 $0$ 이 아니고, $H\_1$ 이 매끄러워 $h\_k$ 가 $\lvert k\rvert$ 에서 빠르게 감소하므로 급수가 수렴한다.

새 변수에서 $\dot I=O(\varepsilon^2)$ 이므로 시간 $1/\varepsilon$ 동안 $I$ 의 변화가 $O(\varepsilon)$ 에 머문다. 교란의 차수만 보고 얻은 $O(1)$ 추정이 한 차수 좋아진다.

## 소분모와 유한 차수

$\lvert k\rvert$ 가 커지면 $k\cdot\omega$ 가 $0$ 에 가까운 $k$ 가 나타나므로 $r$ 를 키울 때 분모가 작아진다. $\omega$ 가 Diophantine 조건

$$
\lvert k\cdot\omega\rvert\ge\frac{\gamma}{\lvert k\rvert^{\tau}}
$$

를 만족하면 $c\_k$ 의 크기가 $\lvert k\rvert^{\tau}$ 로 제한되지만, 단계마다 미분이 들어가 $\chi\_r$ 의 크기가 $r$ 에 대해 계승처럼 자란다. 그래서 급수가 수렴하지 않고 전개를 유한한 $r$ 에서 끊는다.

**정리.** $H$ 가 해석적이고 $\omega$ 가 Diophantine 조건을 만족하면, $r$ 를 $\varepsilon^{-a}$ 꼴로 고르는 최적 절단에서 나머지 항이 $\exp(-c\thinspace\varepsilon^{-b})$ 로 작아진다.[^1]

증명의 요지. $r$ 차 나머지의 크기 상한이 $r!\thinspace C^r\varepsilon^{r+1}$ 꼴이므로 $r$ 를 키우면 계승이 이기고 줄이면 $\varepsilon$ 의 거듭제곱이 진다. 두 항이 균형을 이루는 $r$ 에서 상한이 지수적으로 작은 값이 된다.

## 적분가능계와의 거리

정규형 전개가 수렴하지 않으므로 교란된 계가 적분가능계와 정준변환으로 같다고 할 수 없다. 전개가 주는 것은 유한한 시간 동안의 근사다. 그 시간이 지수적으로 길다는 것이 [Nekhoroshev 추정](nekhoroshev-estimate.md)이고, 전개를 특정 작용 값에서 수렴시켜 불변 원환면을 얻는 것이 [Kolmogorov–Arnold–Moser 정리](kam-theorem.md)다.

# 활용

- **단열 불변량.** 느리게 변하는 매개변수를 가진 계에서 작용 변수가 긴 시간 거의 보존된다는 결과를 1차 평균화로 얻는다. 매개변수의 변화율을 $\varepsilon$ 으로 두면 정규형의 나머지 항이 보존의 오차가 된다.
- **고정점 근방의 안정성.** 타원형 고정점 근방에서 Hamilton 함수를 정규형으로 바꾸면, 비공명인 경우 2차 항이 $n$ 개의 조화진동자로 떨어지고 고차 항이 진동수의 진폭 의존을 준다. 그 의존이 비퇴화면 고정점 근방의 궤도가 지수적으로 긴 시간 머문다.
- **천체역학의 비례 계산.** 평균 운동이 정수비에 가까운 두 천체에서는 그 비에 해당하는 $k$ 가 공명 격자에 들어가고, 정규형에 남는 항이 공명 폭을 준다.

[^1]: G. Benettin, L. Galgani, A. Giorgilli, *A proof of Nekhoroshev's theorem for the stability times in nearly integrable Hamiltonian systems*, Celestial Mech. **37** (1985), 1–25. 최적 절단과 지수적으로 작은 나머지 추정을 다룬다. 정규형 전개의 고전적 서술은 V. I. Arnold, *Mathematical Methods of Classical Mechanics*, 2판, Springer, 1989, 10 장이다.

# 연관 문서

## 선수지식

- [적분가능계](integrable-systems.md)

## 더 알아보기

아직 연결한 문서가 없다.

#differential_geometry #analysis #number_theory
