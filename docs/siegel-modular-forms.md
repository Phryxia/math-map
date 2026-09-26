# Siegel 모듈러 형식

# 개요

Siegel 모듈러 형식은 Siegel 상반공간 위의 정칙함수로, 정수 심플렉틱 군의 작용에서 $\det(C\tau+D)^k$ 만큼 변하는 것이다. 차수 $g=1$ 이면 [모듈러 형식](modular-forms.md)과 같고, $g\ge 2$ 에서는 [Siegel 모듈라이 다양체](siegel-modular-variety.md) 위 선다발의 절단이다. 같은 가중치의 두 형식의 비가 그 다양체 위의 함수를 주므로, 주편극 아벨 다양체의 불변량이 이 형식들로 적힌다.

# 직관

종수 $2$ 곡선 두 개의 Jacobian 이 동형인지를 수 몇 개로 판정하려 한다. 차원 $1$ 에서 그 일을 한 것이 $j$ 불변량이다. $j$ 를 만드는 과정을 다시 본다.

$\mathbb H$ 위에서 $\mathrm{SL}\_2(\mathbb Z)$ 의 작용에 변하지 않는 정칙함수를 직접 만들어 본다. 가장 단순한 것은 격자의 점마다 항을 하나 놓고 더하는 것이다.

$$E_4(\tau)=\sum_{(m,n)\neq(0,0)}\frac{1}{(m\tau+n)^4}$$

$\tau$ 를 $(a\tau+b)/(c\tau+d)$ 로 바꾸면 각 항의 분모가 $(c\tau+d)^{-4}$ 배가 되고, 합을 $\mathbb Z^2$ 의 다른 기저로 다시 세는 것이 되어 $E_4((a\tau+b)/(c\tau+d))=(c\tau+d)^4E_4(\tau)$ 가 나온다. 불변이 아니다.

인수 $(c\tau+d)^4$ 는 함수에 딸린 것이 아니라 변환에 딸린 것이므로, 같은 인수가 붙는 함수 둘의 비에서는 약분된다. $\Delta$ 에는 $(c\tau+d)^{12}$ 가 붙으니 $j=E_4^3/\Delta$ 에서 인수가 사라지고 $j$ 가 불변이다. 불변함수를 얻으려면 인수를 달고 변하는 함수를 먼저 모아야 한다.

차원 $g$ 에서 $\tau$ 는 $g\times g$ 대칭행렬이고 격자 기저를 바꾸는 군은 $\mathrm{Sp}\_{2g}(\mathbb Z)$ 다. 작용이 $(A\tau+B)(C\tau+D)^{-1}$ 이므로 $(c\tau+d)$ 의 자리에 $g\times g$ 행렬 $C\tau+D$ 가 온다. 이것을 수로 만들려면 행렬식을 취한다. 붙는 인수가 $\det(C\tau+D)^k$ 이고, 이 인수를 달고 변하는 정칙함수를 모은 것이 가중치 $k$ 의 공간이다.

# 정의

**가중치 $k$, 차수 $g$ 의 Siegel 모듈러 형식**은 Siegel 상반공간 $\mathbb H_g$ 위의 정칙함수 $f$ 로 다음을 만족하는 것이다.

$$f\bigl((A\tau+B)(C\tau+D)^{-1}\bigr)=\det(C\tau+D)^k f(\tau),\qquad \begin{pmatrix}A&B\cr C&D\end{pmatrix}\in \mathrm{Sp}\_{2g}(\mathbb Z)$$

$A,B,C,D$ 는 $g\times g$ 블록이다. $g=1$ 이면 $\mathrm{Sp}\_2(\mathbb Z)=\mathrm{SL}\_2(\mathbb Z)$ 이고 조건이 모듈러 형식의 변환식과 같다. 이 공간을 $M_k(\Gamma_g)$ 라 쓴다. $g=1$ 에서는 첨점에서 정칙이라는 조건을 따로 붙이지만 $g\ge 2$ 에서는 Koecher 원리로 자동이다.

## Fourier 전개

$\begin{pmatrix}I_g&S\cr 0&I_g\end{pmatrix}$ 는 $\tau$ 를 $\tau+S$ 로 보내고 $\det(C\tau+D)=1$ 이므로, $f$ 는 정수 대칭행렬 $S$ 만큼의 평행이동에 불변이다. 따라서 전개가 있다.

$$f(\tau)=\sum_{T}a(T)\thinspace e^{2\pi i\thinspace\mathrm{tr}(T\tau)}$$

$T$ 는 대각성분이 정수, 비대각성분이 반정수인 대칭 $g\times g$ 행렬 전체를 달린다. $g=1$ 이면 $T$ 가 정수 하나이고 이 전개가 $q$ 전개다.

## 첨점형식

$f$ 가 **첨점형식**이라는 것은 $T$ 가 양정부호가 아닌 항의 계수 $a(T)$ 가 모두 $0$ 이라는 뜻이다. 이 부분공간을 $S_k(\Gamma_g)$ 라 쓴다.

## Siegel $\Phi$ 연산자

$\tau'\in\mathbb H_{g-1}$ 에 대해 다음을 **Siegel $\Phi$ 연산자**라 한다.

$$(\Phi f)(\tau')=\lim_{t\to\infty}f\begin{pmatrix}\tau'&0\cr 0&it\end{pmatrix}$$

극한이 존재하고 $\Phi f\in M_k(\Gamma_{g-1})$ 다. Fourier 계수로는 $\Phi f$ 의 $T'$ 번째 계수가 $f$ 의 $\begin{pmatrix}T'&0\cr 0&0\end{pmatrix}$ 번째 계수다.

# 성질

## Koecher 원리

$g\ge 2$ 이면 $f\in M_k(\Gamma_g)$ 의 Fourier 계수는 $T$ 가 반양정부호가 아닐 때 $0$ 이다[^1]. 증명의 요지. $U\in \mathrm{GL}\_g(\mathbb Z)$ 에 대해 $\begin{pmatrix}U^{\mathsf T}&0\cr 0&U^{-1}\end{pmatrix}$ 가 $\mathrm{Sp}\_{2g}(\mathbb Z)$ 에 있고 $\tau$ 를 $U^{\mathsf T}\tau U$ 로 보내므로 $a(U^{\mathsf T}TU)=\det(U)^ka(T)$ 다. $T$ 가 반양정부호가 아니면 $\mathrm{tr}(U^{\mathsf T}TU\cdot Y)$ 를 아래로 얼마든지 낮추는 $U$ 들이 있고, 그 무한 궤도 위에서 계수의 절댓값이 같으므로 급수가 수렴하지 못한다. 따라서 $a(T)=0$ 이다. $g=1$ 에서는 $\mathrm{GL}\_1(\mathbb Z)=\lbrace\pm 1\rbrace$ 이라 궤도가 유한하고 이 논법이 통하지 않는다.

$g\ge 2$ 에서 첨점에서의 성장 조건을 정의에 넣지 않는 이유가 이것이다.

## 유한 차원성

$M_k(\Gamma_g)$ 는 유한차원이고, 가중치를 다 모은 $M_\ast(\Gamma_g)=\bigoplus_k M_k(\Gamma_g)$ 는 유한생성 등급환이다. 등급환이 유한생성이므로 그 $\mathrm{Proj}$ 가 사영다양체이고, 가중치가 충분히 큰 형식들이 $\mathcal A_g$ 를 그 사영다양체의 열린 부분집합으로 실현한다.

## $\Phi$ 연산자의 핵

$\Phi$ 의 핵이 $S_k(\Gamma_g)$ 다. 정의에서 $\Phi f$ 의 계수는 마지막 행과 열이 $0$ 인 $T$ 의 계수이고, 그런 $T$ 는 양정부호가 아니다. 따라서 $M_k(\Gamma_g)$ 는 첨점형식과 낮은 차수로 내려가는 부분으로 나뉘고, 차수 $g$ 의 계산을 $g-1$ 의 계산으로 옮길 수 있다.

## $g=2$ 의 등급환

짝수 가중치 부분 $\bigoplus_k M_{2k}(\Gamma_2)$ 는 가중치 $4,6,10,12$ 의 형식 $E_4,E_6,\chi_{10},\chi_{12}$ 가 생성하는 다항환이다[^2]. 전체 환은 여기에 가중치 $35$ 의 첨점형식 $\chi_{35}$ 를 더해 얻고, 관계는 $\chi_{35}^2$ 가 앞 네 개의 다항식이라는 것 하나다. $\chi_{10}$ 과 $\chi_{35}$ 의 영점 집합이 각각 Jacobian 이 두 타원곡선의 곱으로 쪼개지는 궤적과 곡선이 초타원적 구조를 잃는 궤적에 대응한다.

## Maass 승강

$k$ 가 짝수일 때 $S_k(\Gamma_2)$ 안에는 Fourier 계수가 판별식 $\det(2T)$ 만으로 정해지는 부분공간이 있고, 이것이 가중치 $2k-2$ 의 타원 첨점형식 공간과 동형이다[^3]. 대응하는 Siegel 형식은 Hecke 고윳값이 겹치므로 Ramanujan 형 계수 상한을 만족하지 않는다. $\mathrm{Sp}\_4$ 의 자동형 표현 가운데 일반적이지 않은 것들이 정확히 이 공간에서 나온다.

# 활용

- **Siegel 모듈라이 다양체의 사영 모델.** 등급환의 $\mathrm{Proj}$ 가 $\mathcal A_g$ 의 콤팩트화를 준다. $g=2$ 에서 $E_4,E_6,\chi_{10},\chi_{12}$ 의 비로 만드는 Igusa 불변량이 종수 $2$ 곡선의 동형류를 판정한다.
- **격자의 theta 급수.** 계수 $m$ 의 짝수 유니모듈러 격자 $L$ 에 대해 $\theta_L^{(g)}(\tau)=\sum e^{\pi i\thinspace\mathrm{tr}(G(x)\tau)}$ 가 가중치 $m/2$, 차수 $g$ 의 Siegel 모듈러 형식이다. 합은 $L^g$ 의 원소 $x=(x_1,\dots,x_g)$ 를 달리고 $G(x)$ 는 내적행렬 $(\langle x_i,x_j\rangle)$ 다. $g=1$ 이면 [theta 급수](theta-series.md)이고, 차수를 올리면 격자를 더 세밀하게 구별한다. [Niemeier 격자](niemeier-lattices.md)의 분류에서 차수 $1$ 로는 같은 급수를 주는 격자들이 차수 $2$ 에서 갈라진다.
- **Galois 표현.** $S_k(\Gamma_2)$ 의 Hecke 고유형식에 $4$ 차원 [Galois 표현](galois-representations.md)이 대응한다. $\mathcal A_2$ 의 코호몰로지에서 그 표현을 뽑는 것이 [Langlands 강령](langlands-program.md)의 $\mathrm{GSp}\_4$ 에 대한 경우다.
- **아벨 곡면의 판정.** $\chi_{10}$ 의 값이 $0$ 인지로 주편극 아벨 곡면이 [Jacobian](jacobian-variety.md)인지 두 타원곡선의 곱인지가 갈린다.

[^1]: M. Koecher, "Zur Theorie der Modulformen n-ten Grades I", Mathematische Zeitschrift **59** (1954), 399–416.

[^2]: J. Igusa, "On Siegel Modular Forms of Genus Two", American Journal of Mathematics **84** (1962), 175–200, 그리고 같은 제목의 II, **86** (1964), 392–412.

[^3]: H. Maass, "Über eine Spezialschar von Modulformen zweiten Grades", Inventiones Mathematicae **52** (1979), 95–104. 이 공간이 가중치 $2k-2$ 의 첨점형식과 동형이라는 것은 A. N. Andrianov, "Modular descent and the Saito–Kurokawa conjecture", Inventiones Mathematicae **53** (1979), 267–280 과 D. Zagier, "Sur la conjecture de Saito–Kurokawa", Séminaire de Théorie des Nombres, Paris 1979–80, 371–394.

# 연관 문서

## 선수지식

- [모듈러 형식](modular-forms.md)
- [Siegel 모듈라이 다양체](siegel-modular-variety.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #complex_analysis #algebra
