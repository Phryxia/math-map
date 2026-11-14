# Rokhlin 정리

# 개요

**Rokhlin 정리(Rokhlin's theorem)** 는 닫힌 매끄러운 4 차원 스핀 다양체의 부호수가 $16$ 의 배수라는 정리다. 성분이 정수인 $8\times 8$ 대칭행렬 $E_8$ 은 대각 성분이 모두 짝수이고 행렬식이 $1$ 이며 부호수가 $8$ 이어서, 대수만 보면 어떤 4 차원 다양체의 교차형식이 될 수 있어 보인다. Rokhlin 정리는 이런 형식을 가진 다양체가 매끄러울 수 없다는 것을 부호수의 나머지 하나로 판정한다.

# 직관

닫힌 단연결 4 차원 다양체의 [교차형식](intersection-form.md)은 행렬식이 $\pm1$ 인 정수 대칭행렬이다. 대각 성분이 모두 짝수인 짝수형만 모으면, 부호수가 언제나 $8$ 의 배수라는 것이 대수만으로 증명된다. 쌍곡형 $H=\begin{pmatrix}0&1\cr 1&0\end{pmatrix}$ 은 부호수 $0$, $E_8$ 은 부호수 $8$ 이다.

매끄러운 다양체에서 실제로 나오는 짝수형을 본다. $S^2\times S^2$ 의 형식은 $H$ 이고 부호수는 $0$ 이다. 복소 사영공간 $\mathbb{CP}^3$ 안의 사차 곡면인 K3 곡면(K3 surface)의 형식은 $E_8$ 의 부호를 바꾼 것 둘과 $H$ 셋의 직합이고 부호수는 $-16$ 이다. 부호수가 $8$ 이나 $24$ 처럼 $8$ 의 홀수배인 짝수형은 매끄러운 다양체에서 나오지 않는다.

[Freedman 정리](freedman-theorem.md)는 $E_8$ 을 교차형식으로 갖는 위상다양체를 만든다. 그러므로 $8$ 과 $16$ 사이의 간격은 대수나 위상이 아니라 매끄러운 구조에서 생긴다. 매끄러운 스핀 다양체에서는 부호수가 [Dirac 작용소](dirac-operator.md)의 두 해 공간의 차원 차로 적히고, 그 공간들이 짝수 차원이라 $2$ 가 하나 더 붙는다.

# 정의

## 부호수와 스핀 구조

닫힌 유향 4 차원 다양체 $M$ 의 교차형식 $Q_M$ 을 실수 위에서 대각화했을 때 양의 고윳값 수에서 음의 고윳값 수를 뺀 값을 $M$ 의 **부호수(signature)** $\sigma(M)$ 이라 한다. 직관 절의 K3 곡면은 $\sigma=-16$ 이다. $M$ 이 [스핀 구조](spin-structures.md)를 가지면 $M$ 을 스핀 다양체라 한다. 둘째 [Stiefel–Whitney 류](stiefel-whitney-classes.md) $w_2(M)$ 이 $0$ 인 것과 같다.

## Rokhlin 정리

$M$ 이 닫힌 매끄러운 4 차원 스핀 다양체이면 다음이 성립한다[^1].

$$
\sigma(M)\equiv 0\pmod{16}
$$

단연결이면 $Q_M$ 이 짝수형인 것과 $M$ 이 스핀인 것이 동치이므로, 정리는 "단연결 매끄러운 4 차원 다양체의 교차형식이 짝수형이면 부호수가 $16$ 의 배수다" 로도 읽힌다.

# 성질

## 지표 정리에 의한 증명

증명의 요지. [Hirzebruch 부호수 정리](hirzebruch-signature-theorem.md)로 $\sigma(M)=p_1\lbrack M\rbrack/3$ 이다. 스핀 다양체에서 Dirac 작용소의 지표는 [지표 정리](index-theorem.md)로 $\hat A$ 종수 $-p_1\lbrack M\rbrack/24$ 와 같다. 두 식에서 다음이 나온다.

$$
\mathrm{ind}\thinspace D=-\frac{\sigma(M)}{8}
$$

4 차원에서 스피너 다발의 반쪽 $S^\pm$ 은 사원수 구조를 가지고 $D$ 는 그 구조와 교환한다. 그래서 핵과 여핵이 사원수 벡터공간이고 복소 차원이 짝수이므로 지표가 짝수다. 지표가 정수라는 것만으로 $8\mid\sigma$ 가 나오고, 짝수라는 것으로 $16\mid\sigma$ 가 나온다. Rokhlin 의 원래 증명은 이 방법이 아니라 안정 호모토피군 $\pi_3^s\cong\mathbb Z/24$ 의 계산을 썼다[^1].

## 16 의 최선성

K3 곡면은 단연결 스핀 다양체이고 $\sigma=-16$ 이다. 그러므로 $16$ 을 더 큰 수로 바꿀 수 없다.

## 스핀 조건의 필요성

단연결이 아니면 짝수형이라도 스핀이 아닐 수 있고, 그때는 정리가 성립하지 않는다. Enriques 곡면(Enriques surface)은 기본군이 $\mathbb Z/2$ 이고 교차형식이 $E_8$ 의 부호를 바꾼 것과 $H$ 의 직합이라 짝수형이며 $\sigma=-8$ 이다. 이 곡면은 $w_2\ne 0$ 이어서 스핀이 아니다.

## Rokhlin 불변량

정수 호몰로지 3 구면 $Y$ 는 매끄러운 스핀 4 다양체 $W$ 의 경계가 된다. 다음 값을 $Y$ 의 **Rokhlin 불변량(Rokhlin invariant)** 이라 한다.

$$
\mu(Y)=\frac{\sigma(W)}{8}\bmod 2
$$

$Y$ 를 경계로 갖는 두 스핀 다양체 $W,W'$ 을 $Y$ 를 따라 붙이면 닫힌 스핀 다양체가 되고 부호수는 $\sigma(W)-\sigma(W')$ 이다. Rokhlin 정리로 이 차가 $16$ 의 배수이므로 $\mu(Y)$ 는 $W$ 의 선택과 무관하다.

Poincaré 호몰로지 구면은 $E_8$ 의 부호를 바꾼 형식을 갖는 스핀 다양체의 경계이므로 $\mu=1$ 이다. 가축 다양체는 스핀이고 부호수가 $0$ 이라 $\mu=0$ 을 주므로, 이 구면은 매끄러운 가축 4 다양체의 경계가 아니다.

# 활용

- [Freedman 정리](freedman-theorem.md). 교차형식이 $E_8$ 인 위상다양체는 Rokhlin 정리로 매끄러운 구조를 갖지 않는다. 짝수형의 위상 4 다양체에서 Kirby–Siebenmann 불변량(Kirby–Siebenmann invariant)이 $\sigma/8\bmod 2$ 로 정해지는 것도 이 정리에서 온다.
- [Casson 불변량](casson-invariant.md). Casson 불변량을 $2$ 로 나눈 나머지가 Rokhlin 불변량과 같다. 그래서 Casson 불변량은 Rokhlin 불변량을 정수로 올린 것이다.
- 10/8 정리(10/8 theorem). Furuta 는 $b_2\gt 0$ 인 닫힌 매끄러운 스핀 4 다양체가 $b_2(M)\ge\tfrac{10}{8}\vert\sigma(M)\vert+2$ 를 만족함을 보였다[^2]. Rokhlin 정리가 부호수의 나머지를 제한한다면, 이 부등식은 짝수형이 차지할 수 있는 크기를 제한한다.
- [Donaldson 불변량](donaldson-invariants.md)과 비교. Donaldson 의 대각화 정리는 정부호형을 제한하고, Rokhlin 정리는 짝수형을 제한한다. 두 정리를 합치면 단연결 매끄러운 4 다양체에서 나올 수 있는 교차형식이 크게 줄어든다.

[^1]: V. A. Rokhlin, New results in the theory of four-dimensional manifolds, *Doklady Akademii Nauk SSSR* 84 (1952), 221–224.
[^2]: M. Furuta, Monopole equation and the 11/8-conjecture, *Mathematical Research Letters* 8 (2001), 279–291.

# 연관 문서

## 선수지식

- [교차형식](intersection-form.md)
- [Dirac 작용소](dirac-operator.md)
- [Hirzebruch 부호수 정리](hirzebruch-signature-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebraic_topology #differential_geometry #topology
