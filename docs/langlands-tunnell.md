# Langlands–Tunnell 정리

# 개요

**Langlands–Tunnell 정리(Langlands–Tunnell theorem)** 는 정수 계수 다항식의 근이 뒤섞이는 방식에서 나오는 2 차원 표현 가운데, 근의 대칭이 정사면체나 정팔면체의 회전군인 것이 무게 $1$ 의 [모듈러 형식](modular-forms.md)에서 온다는 정리다. 다항식 $x^3-x-1$ 을 소수 $p$ 로 나눈 나머지에서 풀면 $p$ 에 따라 근이 $0$ 개, $1$ 개, $3$ 개로 바뀌는데, 그 개수는 무한곱 $q\prod_{n\ge 1}(1-q^n)(1-q^{23n})$ 을 전개한 $q^p$ 의 계수에 $1$ 을 더한 값이다. 이 다항식의 근의 대칭은 정삼각형의 대칭군이고, Langlands–Tunnell 정리는 근의 대칭이 정사면체나 정팔면체의 회전군인 다항식에도 같은 꼴의 공식이 있음을 그에 맞는 무게 $1$ 의 형식을 만들어 보인다.

# 직관

Langlands–Tunnell 정리는 상이 [가해군](solvable-groups.md)인 2 차원 홀수 기약 복소 [Galois 표현](galois-representations.md) $\rho\colon G_{\mathbb Q}\to\mathrm{GL}\_2(\mathbb C)$ 가 무게 $1$ 의 새형식에서 온다는 정리다. Langlands 가 1980 년에 사면체 경우를, Tunnell 이 1981 년에 팔면체 경우를 증명했다.[^1][^2]

그 결과로 이런 $\rho$ 의 [Artin L 함수](artin-l-functions.md)는 무게 $1$ 형식의 $L$ 함수와 같고 정함수다. Wiles 는 이 정리를 mod $3$ 표현의 모듈러성을 얻는 출발점으로 썼다.

$\rho$ 의 상은 유한군이다. 스칼라 [행렬](matrices.md)로 나누어 $\mathrm{PGL}\_2(\mathbb C)$ 로 보내면 상은 $\mathrm{PGL}\_2(\mathbb C)$ 의 유한 부분군이고, 그런 군은 순환군, 이면체군, 정사면체군 $A_4$, 정팔면체군 $S_4$, 정이십면체군 $A_5$ 다섯 가지뿐이다.

이면체 경우는 이차체 $K$ 위의 지표 $\chi$ 에서 유도된 표현 $\rho=\mathrm{Ind}\_K^{\mathbb Q}\chi$ 이다. $\chi$ 에서 Hecke 의 세타 급수를 만들면 무게 $1$ 형식이 직접 나온다. $A_4$ 는 정규부분군 $V_4$ 를 갖고 몫이 위수 $3$ 인 순환군이므로, 3 차 순환 확대 $F$ 로 제한하면 사영 상이 $V_4$ 로 줄어 이면체 경우가 된다. 거기서 얻은 $F$ 위의 자기동형 표현을 $\mathbb Q$ 로 내려보내는 것이 Langlands 의 기저변환(base change)이다. $S_4$ 는 몫 $S_4/A_4$ 가 위수 $2$ 이므로 같은 방법으로 $A_4$ 경우로 줄인다.

# 정의

## 진술

$\rho\colon G_{\mathbb Q}\to\mathrm{GL}\_2(\mathbb C)$ 가 연속이고 기약이며 복소켤레 $c$ 에서 $\det\rho(c)=-1$ 이라 한다. $\rho$ 의 사영 상이 가해군, 곧 이면체군이나 $A_4$ 나 $S_4$ 이면, $\rho$ 의 Artin 도체 $N$ 과 $\det\rho$ 에 대응하는 Dirichlet 지표 $\varepsilon$ 에 대해 새형식 $f\in S_1(\Gamma_0(N),\varepsilon)$ 가 있어 $N$ 을 나누지 않는 모든 소수 $\ell$ 에서

$$
a_\ell(f)=\mathrm{tr}\thinspace\rho(\mathrm{Frob}\_\ell)
$$

가 성립한다.

## 무게 1 형식과 Galois 표현

반대 방향은 Deligne–Serre 정리(Deligne–Serre theorem)다. 무게 $1$ 새형식 $f$ 마다 위 등식을 만족하는 홀수 기약 표현 $\rho_f$ 가 있고 그 상은 유한하다.[^3] Langlands–Tunnell 정리는 사영 상이 가해군인 범위에서 이 대응이 전사임을 말한다.

# 성질

## 기저변환의 사용

**사면체 경우(Langlands).** 사영 상이 $A_4$ 이면 $V_4$ 에 대응하는 3 차 순환 확대 $F/\mathbb Q$ 에서 $\rho\vert\_{G_F}$ 의 사영 상은 $V_4$ 이고 이면체군이다. $\rho\vert\_{G_F}$ 는 $\mathrm{GL}\_2(\mathbb A_F)$ 의 자기동형 표현 $\Pi$ 에 대응한다. 소수 차수 순환 확대의 기저변환에서 $\Pi$ 가 $\mathrm{Gal}(F/\mathbb Q)$ 불변이면 $\mathbb Q$ 위의 자기동형 표현 $\pi$ 의 기저변환이고, 꼬임 $\pi\otimes\omega$ 세 개 가운데 하나가 $\rho$ 에 대응한다.

**팔면체 경우(Tunnell).** 사영 상이 $S_4$ 이면 $A_4$ 에 대응하는 이차 확대 $K$ 로 제한해 사면체 경우를 얻고, $\mathbb Q$ 로 내려올 때 이차 기저변환의 꼬임 두 개 가운데 $\rho$ 에 맞는 쪽을 고른다. 고르는 데는 Jacquet, Piatetski-Shapiro, Shalika 의 비정규 3 차 확대 기저변환을 쓴다.

## 이십면체 경우

사영 상이 $A_5$ 이면 $A_5$ 가 단순군이라 순환 확대로 줄일 수 없고, 이 증명이 적용되지 않는다. $\mathbb Q$ 위의 홀수 이십면체 경우는 [Serre 추측과 Khare–Wintenberger 정리](serre-conjecture.md)에서 따라 나온다.

# 활용

- [Fermat 마지막 정리](fermats-last-theorem.md): 반안정 [타원곡선](elliptic-curves.md) $E$ 에서 $\bar\rho_{E,3}\colon G_{\mathbb Q}\to\mathrm{GL}\_2(\mathbb F_3)$ 을 $\mathrm{GL}\_2(\mathbb F_3)\to\mathrm{GL}\_2(\mathbb Z\lbrack\sqrt{-2}\rbrack)$ 로 올리면 상이 가해군인 복소 표현이 된다. 이 정리로 무게 $1$ 형식이 나오고, $1$ 과 합동인 [Eisenstein 급수](eisenstein-series.md)를 곱해 $\bar\rho_{E,3}$ 을 주는 무게 $2$ 형식을 얻는다.
- Artin 추측: 사영 상이 가해군인 2 차원 홀수 표현의 $L(s,\rho)$ 가 정함수다.
- [Langlands 강령](langlands-program.md): $\mathrm{GL}\_2$ 의 기저변환이 함자성(functoriality)의 첫 사례 가운데 하나이고, 이 정리가 그것으로 Galois 쪽의 대응을 증명한 경우다.

[^1]: R. P. Langlands, *Base Change for GL(2)*, Annals of Mathematics Studies 96, Princeton University Press, 1980.
[^2]: J. Tunnell, *Artin's conjecture for representations of octahedral type*, Bull. Amer. Math. Soc. (N.S.) **5** (1981), 173–175.
[^3]: P. Deligne, J.-P. Serre, *Formes modulaires de poids 1*, Ann. Sci. ENS (4) **7** (1974), 507–530.

# 연관 문서

## 선수지식

- [Artin L 함수](artin-l-functions.md)
- [Langlands 강령](langlands-program.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #group_theory #theorem
