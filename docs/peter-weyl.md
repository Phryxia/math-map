# Peter–Weyl 정리

# 개요

유한군의 표현론은 세 가지 사실 위에 서 있다. 모든 표현이 기약표현의 직합으로 쪼개지고, 기약표현은 유한개이며, 정칙표현이 모든 기약표현을 차원만큼씩 담는다.

$$
\mathbb C[G]\cong\bigoplus_i V_i^{\oplus\dim V_i}
$$

증명의 핵심 도구는 군 위의 평균 $\frac1{|G|}\sum_{g\in G}$ 이다. 그렇다면 군이 무한하지만 콤팩트일 때, 합을 적분으로 바꾸면 같은 이론이 살아나지 않을까.

**Peter–Weyl 정리**가 그렇다고 답한다. 콤팩트 [Lie 군](lie-groups.md) $G$ 에는 전체 부피가 1 인 불변 측도(Haar 측도)가 있고, 위 동형이 [Hilbert 공간](hilbert-spaces.md)의 직교분해로 그대로 번역된다.

$$
L^2(G)\cong\widehat{\bigoplus_{i}}\ V_i\otimes V_i^*
$$

오른쪽 합은 가산개이고 각 항은 유한차원이다. 유한군에서 성립하던 것이 형태를 거의 바꾸지 않고 살아남는다.

이 정리가 고전 조화해석을 하나로 묶는다. $G=S^1$ 이면 [Fourier 급수](fourier-series.md)이고, $G=\mathrm{SO}(3)$ 이면 [구면조화함수](spherical-harmonics.md)다. 둘 다 "군 위의 함수를 기약표현으로 분해한다" 는 같은 문장의 특수한 경우가 된다.

# 직관

## 평균이 모든 것을 한다

유한군에서 임의의 내적 $\langle\cdot,\cdot\rangle_0$ 을 군 평균으로 대칭화하면 불변 내적이 나온다.

$$
\langle u,v\rangle=\frac1{|G|}\sum_{g\in G}\langle gu,gv\rangle_0
$$

그러면 표현이 유니터리가 되고, 부분표현의 직교보공간이 다시 부분표현이라 완전가약성이 따라온다.

콤팩트 군에서는 합을 Haar 적분으로 바꾼다.

$$
\langle u,v\rangle=\int_G\langle gu,gv\rangle_0\thinspace dg
$$

콤팩트성이 필요한 지점이 정확히 여기다. Haar 측도의 전체 질량이 유한해야 평균이 정의된다. $G=\mathbb R$ 이면 전체 질량이 무한이라 이 논법이 무너지고, 실제로 $\mathbb R$ 의 유니터리 표현은 직합이 아니라 직적분으로 분해된다. 연속 스펙트럼이 나오는 것이 그 차이다.

## 행렬계수가 함수를 만든다

표현 $\rho:G\to\mathrm{GL}(V)$ 와 기저를 고정하면 함수들이 나온다.

$$
\rho_{ij}(g)=\big(\rho(g)\big)_{ij}
$$

이것을 **행렬계수**라 한다. $G=S^1$ 이고 $\rho_n(\theta)=e^{in\theta}$ 이면 행렬계수가 $e^{in\theta}$ 자신이고, Fourier 급수가 모든 $L^2$ 함수는 행렬계수의 급수라는 진술이 된다.

Peter–Weyl 정리의 첫 형태가 바로 이 일반화다. 모든 기약표현의 행렬계수를 모으면 $L^2(G)$ 에서 조밀하고, 적절히 정규화하면 정규직교기저가 된다.

$$
\left\lbrace\sqrt{\dim V_i}\ \rho^{(i)}_{jk}\right\rbrace
$$

$\dim V_i$ 짜리 표현이 $(\dim V_i)^2$ 개의 함수를 기여하므로, 유한군의 $|G|=\sum(\dim V_i)^2$ 가 무한 버전으로 옮겨진 셈이다.

# 정의

## Haar 측도

국소 콤팩트 위상군 $G$ 위에 왼쪽 평행이동 불변인 Radon 측도가 상수배를 빼고 유일하게 존재한다.

$$
\int_Gf(hg)\thinspace dg=\int_Gf(g)\thinspace dg\qquad(\forall h\in G)
$$

$G$ 가 콤팩트이면 이 측도가 유한이고 오른쪽 불변이기도 하며(유니모듈러), $\int_G1\thinspace dg=1$ 로 정규화한다. 유한군에서는 $dg$ 가 각 점에 $1/|G|$ 를 주는 계량 측도다.

## 행렬계수와 지표

유한차원 표현 $(\rho,V)$ 의 행렬계수는 위와 같고, **지표**는 $\chi_\rho(g)=\operatorname{tr}\rho(g)$ 다. 지표는 켤레불변이라 **류함수**이고, 콤팩트 군에서도 유한군과 같은 직교관계를 만족한다.

$$
\int_G\chi_i(g)\overline{\chi_j(g)}\thinspace dg=\delta_{ij}
$$

# 성질

## 정리의 세 형태

콤팩트 군 $G$ 에 대해 다음이 성립한다.

- **(대수적)** 모든 기약 유니터리 표현은 유한차원이고, 동형류가 가산개다. 모든 유니터리 표현은 기약표현의 Hilbert 직합이다.
- **(해석적)** 행렬계수들이 $C(G)$ 에서 균등노름으로 조밀하고, $L^2(G)$ 의 정규직교기저를 이룬다. 곧

$$
L^2(G)=\widehat{\bigoplus_{i\in\hat G}}\ \operatorname{End}(V_i),\qquad
\dim\operatorname{End}(V_i)=(\dim V_i)^2
$$

- **(구조적)** $G$ 가 콤팩트 Lie 군이면 충실한 유한차원 표현이 존재한다. 곧 모든 콤팩트 Lie 군은 어떤 $\mathrm U(n)$ 의 닫힌 부분군이다.

세 번째가 특히 유용하다. 추상적으로 주어진 콤팩트 Lie 군을 언제나 행렬군으로 볼 수 있다는 뜻이라, 이론 전개가 훨씬 구체적이 된다.

지표는 류함수 공간 $L^2(G)^G$ 의 정규직교기저를 이룬다. 유한군에서 "기약표현의 개수 = 켤레류의 개수" 였던 사실의 대응물이다.

## 고전적 특수 경우

| $G$ | 기약표현 | Peter–Weyl 분해 |
|---|---|---|
| $S^1$ | 1 차원의 $e^{in\theta}$ | Fourier 급수 |
| $\mathrm{SU}(2)$ | 스핀 $j$ 의 $(2j+1)$ 차원 | Wigner $D$ 함수 전개 |
| $\mathrm{SO}(3)$ | 정수 스핀 $\ell$ 의 $(2\ell+1)$ 차원 | 구면조화함수 전개 |
| 유한군 $G$ | $V_i$ | 정칙표현 분해 |

$\mathrm{SO}(3)$ 의 경우 $L^2(S^2)=L^2(\mathrm{SO}(3)/\mathrm{SO}(2))$ 이므로 $\mathrm{SO}(2)$ 불변 벡터만 남고, 각 $\ell$ 에서 1 차원씩 기여해 $\bigoplus_\ell V_\ell$ 이 된다. 구면조화함수 $Y_\ell^m$ 이 정확히 그 기저다.

## 콤팩트를 벗어나면

콤팩트성을 버리면 결론이 크게 바뀐다.

- $\mathbb R$ 이나 $\mathbb R^n$ 에서는 기약표현이 1 차원 지표 $e^{i\xi x}$ 이지만 $L^2$ 분해가 직합이 아니라 직적분이다. 이것이 Fourier 변환이다.
- 반단순 실 Lie 군: 기약 유니터리 표현이 무한차원이고, Plancherel 측도로 직적분 분해가 주어진다. Harish-Chandra 의 이론이 이것을 다룬다.
- 산술 몫 $\Gamma\backslash G$ 에서는 이산 스펙트럼과 연속 스펙트럼으로 나뉘고, 이산 부분이 자기동형 형식이다. [Langlands 강령](langlands-program.md)이 여기서 시작한다.

콤팩트 군이 전부 이산 스펙트럼인 것은 $L^2(G)$ 에 작용하는 합성곱 작용소가 콤팩트 작용소라 스펙트럼 정리가 깔끔하게 적용되기 때문이다.

# 활용

## 비가환 Fourier 해석

군 위의 함수를 기약표현으로 전개하는 것이 비가환 Fourier 변환이다.

$$
\hat f(\rho)=\int_Gf(g)\rho(g)^{-1}dg\in\operatorname{End}(V_\rho)
$$

합성곱이 행렬곱이 되므로, 군 구조를 가진 데이터의 합성곱을 블록 대각화할 수 있다. 신호처리에서 회전군 위의 상관 계산, 기계학습에서 회전 동변 신경망의 구현이 이 변환을 쓴다.

## 양자역학의 각운동량

회전 대칭을 가진 Hamiltonian 의 고유공간은 $\mathrm{SO}(3)$ 의 표현이다. Peter–Weyl 분해가 상태공간을 각운동량 $\ell$ 별로 쪼개고, 축퇴도가 $2\ell+1$ 인 이유를 설명한다. 두 입자를 합칠 때의 Clebsch–Gordan 계수가 위 코드에서 본 지표 내적이다.

## 극대 원환면와 Weyl 지표 공식

콤팩트 연결 Lie 군에서는 모든 원소가 극대 원환면 $T$ 의 켤레에 들어가므로, 류함수가 $T$ 위의 Weyl 군 불변 함수로 결정된다. 그래서 지표 계산이 [근계](root-systems.md) 위의 유한합으로 내려오고, Weyl 지표 공식이 명시적인 답을 준다. 위에서 쓴 $\chi_n(\theta)=\sin((n+1)\theta)/\sin\theta$ 가 $\mathrm{SU}(2)$ 에서의 그 공식이다.

# 연관 문서

## 선수지식

- [Lie 군과 지수사상](lie-groups.md)
- [Hilbert 공간](hilbert-spaces.md)

## 더 알아보기

- [Weyl 지표 공식과 최고무게 이론](weyl-character-formula.md)
- [Weil 표현과 theta 대응](weil-representation.md)

#functional_analysis #group_theory #analysis
