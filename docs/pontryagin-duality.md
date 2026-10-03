# Pontryagin 쌍대성

# 개요

Pontryagin 쌍대성은 국소콤팩트 아벨군 $G$ 와 그 지표들이 이루는 군 $\hat G$ 사이의 대응이다. $\hat G$ 를 다시 쌍대로 보내면 $G$ 로 돌아오고, 이 대응이 Fourier 변환을 군 위에서 정의하는 틀이 된다.

Fourier 급수는 $S^1$ 과 $\mathbb Z$ 의 쌍, Fourier 변환은 $\mathbb R$ 과 $\mathbb R$ 의 쌍, 유한 Fourier 변환은 $\mathbb Z/n$ 과 자기 자신의 쌍이다. 세 변환이 한 정리의 사례이고, 어느 쌍에서나 Plancherel 등식과 역변환 공식이 같은 형태로 성립한다.

# 직관

주기 $1$ 인 함수를 $e^{2\pi inx}$ 들의 합으로 쓰는 것이 Fourier 급수다. 쓸 수 있는 지수는 정수 $n$ 전체이고, 각 $n$ 은 원 $S^1$ 에서 절댓값 $1$ 인 복소수로 가는 연속 준동형 $x\mapsto e^{2\pi inx}$ 를 준다. 거꾸로 $S^1$ 의 연속 준동형은 모두 이 꼴이므로, 쓸 수 있는 지수의 집합이 $\mathbb Z$ 와 같다. 실직선에서 같은 일을 하면 지수가 $e^{2\pi i\xi x}$ 이고 $\xi$ 가 실수 전체를 달린다.

$$
\hat{S^1}\cong\mathbb Z,\qquad \hat{\mathbb Z}\cong S^1,\qquad \hat{\mathbb R}\cong\mathbb R
$$

전개에 쓰는 지수들이 그 자체로 군을 이루고, 그 군이 무엇인지가 원래 군으로 정해진다. 콤팩트한 $S^1$ 의 쌍대는 이산적인 $\mathbb Z$ 이고 그 반대도 성립하므로, 한쪽에서 급수가 되는 자리가 다른 쪽에서는 적분이 된다. 두 번 쌍대를 취하면 제자리로 온다는 것이 Fourier 역변환이 원래 함수를 되돌려 준다는 사실의 군론 쪽 진술이다.

# 정의

## 지표와 쌍대군

$G$ 를 [국소콤팩트 아벨군](topological-groups.md)이라 하고 $\mathbb T=\lbrace z\in\mathbb C:\vert z\vert=1\rbrace$ 이라 하자. 연속 준동형 $\chi:G\to\mathbb T$ 를 **지표**라 한다.

지표 전체 $\hat G$ 는 점별 곱 $(\chi_1\chi_2)(g)=\chi_1(g)\chi_2(g)$ 로 아벨군이다. 여기에 콤팩트 집합 위의 균등수렴 위상을 주면, 곧 콤팩트 $K\subseteq G$ 와 $\varepsilon\gt0$ 마다

$$
N(K,\varepsilon)=\lbrace \chi:\ \vert\chi(g)-1\vert\lt\varepsilon\ \ (g\in K)\rbrace
$$

들을 항등원 근방 기저로 삼으면 $\hat G$ 도 국소콤팩트 아벨군이다. 이것을 **쌍대군**이라 한다.

## Fourier 변환

$G$ 의 [Haar 측도](haar-measure.md) $\mu$ 를 고정하고 $f\in L^1(G,\mu)$ 에 대해 다음을 정의한다.

$$
\hat f(\chi)=\int_G f(g)\thinspace\overline{\chi(g)}\thinspace d\mu(g)
$$

$\hat f$ 는 $\hat G$ 위의 유계 연속함수다. $G=\mathbb R$, $\chi(x)=e^{2\pi i\xi x}$ 로 두면 통상의 Fourier 변환이고, $G=S^1$ 로 두면 Fourier 계수다.

# 성질

## 쌍대성 정리

> **정리**(Pontryagin, van Kampen)**.** $G$ 가 국소콤팩트 아벨군이면 자연사상 $\alpha:G\to\hat{\hat G}$, $\alpha(g)(\chi)=\chi(g)$ 는 위상군 동형이다.

증명의 요지는 $\hat G$ 가 $G$ 의 점을 분리한다는 것이다. $g\ne e$ 이면 $\chi(g)\ne1$ 인 지표가 있고, 이는 $L^1(G)$ 의 Gelfand 이론에서 극대 아이디얼이 지표에 대응하는 데서 나온다. 분리성이 $\alpha$ 의 단사성을 주고, 전사성은 $\hat{\hat G}$ 의 부분군 $\alpha(G)$ 가 닫혀 있고 조밀함을 보여 얻는다.

## 콤팩트성과 이산성의 교환

$G$ 가 콤팩트인 것과 $\hat G$ 가 이산인 것은 동치이고, $G$ 가 이산인 것과 $\hat G$ 가 콤팩트인 것도 동치다.

$G$ 가 콤팩트면 $N(G,1)$ 이 항등원만 담는 열린집합이므로 $\hat G$ 가 이산이다. $G$ 가 이산이면 $\hat G$ 는 $\mathbb T^G$ 의 닫힌 부분집합이고 Tychonoff 정리로 콤팩트다.

| $G$ | $\hat G$ |
| --- | --- |
| $\mathbb R$ | $\mathbb R$ |
| $S^1$ | $\mathbb Z$ |
| $\mathbb Z$ | $S^1$ |
| $\mathbb Z/n$ | $\mathbb Z/n$ |
| $\mathbb Q\_p$ | $\mathbb Q\_p$ |
| $\mathbb Z\_p$ | $\mathbb Q\_p/\mathbb Z\_p$ |

## Plancherel 정리와 역변환

$\mu$ 를 적절히 정규화하면 $L^1\cap L^2$ 에서 $\Vert\hat f\Vert\_2=\Vert f\Vert\_2$ 가 성립하고, Fourier 변환이 $L^2(G)$ 에서 $L^2(\hat G)$ 로의 유니타리 동형으로 확장된다.

$$
f(g)=\int_{\hat G}\hat f(\chi)\thinspace\chi(g)\thinspace d\hat\mu(\chi)
$$

역변환 공식의 모양이 변환 공식과 같고, 바뀐 것은 적분하는 군과 켤레의 자리뿐이다. 쌍대성 정리가 $\hat{\hat G}=G$ 를 주므로 두 공식이 서로의 쌍대가 된다.

## 부분군과 몫의 쌍대

닫힌 부분군 $H\le G$ 에 대해 $H$ 에서 $1$ 이 되는 지표 전체를 $H^\perp$ 라 하면 다음이 성립한다.

$$
H^\perp\cong\widehat{G/H},\qquad \hat G/H^\perp\cong\hat H
$$

부분군과 몫군이 쌍대에서 자리를 바꾼다. $G=\mathbb R$, $H=\mathbb Z$ 에서 $H^\perp=\mathbb Z$ 이고 $\widehat{\mathbb R/\mathbb Z}=\hat{S^1}=\mathbb Z$ 가 이 등식의 사례다.

격자 $H$ 와 그 쌍대격자 $H^\perp$ 에 대해 $f$ 의 $H$ 위의 합과 $\hat f$ 의 $H^\perp$ 위의 합을 잇는 것이 [Poisson 합 공식](poisson-summation.md)이다. $G=\mathbb R$, $H=\mathbb Z$ 에서 고전적 형태가 나온다.

# 활용

- **조화해석의 통일.** Fourier 급수, Fourier 변환, [이산 Fourier 변환](fourier.md)이 각각 $S^1$, $\mathbb R$, $\mathbb Z/n$ 의 쌍대성이다. 수렴 정리와 Plancherel 등식을 군마다 다시 증명하지 않고 한 번에 얻는다.
- **아델 위의 해석.** [아델](adeles.md) 군 $\mathbb A$ 는 자기쌍대이고 $\mathbb Q$ 가 자기 직교 부분군이다. $\mathbb A/\mathbb Q$ 가 콤팩트이므로 쌍대가 이산군 $\mathbb Q$ 이고, 이 자기쌍대성이 [Tate 논문](tate-thesis.md)의 국소-전역 함수방정식을 준다.
- **콤팩트군의 표현.** 아벨이 아닌 콤팩트군에서는 지표 대신 기약표현 전체가 쌍대의 자리에 오고, [Peter–Weyl 정리](peter-weyl.md)가 $L^2(G)$ 의 분해를 준다. 아벨군에서 모든 기약표현이 $1$ 차원이므로 두 정리가 겹친다.
- **격자와 theta 급수.** 격자의 쌍대격자에 대한 Poisson 합이 [theta 급수](theta-series.md)의 모듈러 변환식을 준다. 자기쌍대 격자에서 변환식이 가장 단순해지고 그것이 부호 이론의 불변량 계산에 쓰인다.

# 연관 문서

## 선수지식

- [위상군](topological-groups.md)

## 더 알아보기

아직 연결한 문서가 없다.

#functional_analysis #topology #analysis #number_theory
