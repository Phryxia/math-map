# 질량 공식

# 개요

**질량 공식(mass formula)** 은 같은 종류의 정부호 이차형식을 셀 때, 각 형식을 그 대칭의 개수로 나누어 더한 값을 국소 계산만으로 주는 공식이다. $x^2+y^2$ 는 정사각형 격자에 대응하고, 이 격자를 제자리로 보내는 회전과 뒤집기가 $8$ 개라서 그 몫은 $1/8$ 이다. 차원과 판별식을 고정해도 서로 다른 형식이 몇 개인지는 차원에 따라 불규칙하게 바뀌어 직접 세기 어렵다. 질량 공식은 개수 대신 대칭의 개수의 역수를 더한 값을 각 소수에서의 해의 밀도와 zeta 값의 곱으로 주고, 이 값으로 형식이 하나뿐인지 판정하거나 형식 개수의 하한을 얻는다.

# 직관

정사각형의 꼭짓점 넷을 검정과 흰색으로 칠하는 방법은 $16$ 가지다. 회전 $4$ 개로 겹치는 칠하기를 같은 것으로 보면 서로 다른 칠하기의 개수는 $6$ 이고, 이 개수는 [Burnside 보조정리](burnside-lemma.md)로 회전마다 고정점을 세어야 나온다. 서로 다른 칠하기마다 그것을 고정하는 회전의 개수의 역수를 더하면 계산이 쉽다. 칠하기 하나와 같은 것으로 보는 칠하기는 $4$ 를 그 고정 회전 개수로 나눈 만큼 있으므로, 이 합은 $16$ 가지를 각각 $1/4$ 로 센 값 $16/4=4$ 다.

이차형식에서 같은 일을 한다. 변수 $8$ 개의 양의 정부호 이차형식 가운데 정수를 넣으면 늘 짝수 값이 나오고 판별식이 $1$ 인 것을 정수 변수 치환으로 같은 것끼리 묶는다. 묶음이 몇 개인지는 목록을 만들어야 알지만, 묶음마다 그 형식을 보존하는 치환의 개수의 역수를 더한 값은 소수마다의 계산과 Bernoulli 수로 나온다.

변수 $8$ 개에서 그 값은 $1/696729600$ 이다. $E_8$ 이라 부르는 형식 하나를 보존하는 치환이 정확히 $696729600$ 개이므로, $E_8$ 하나만으로 합이 다 찬다. 다른 형식이 있었다면 합이 더 커졌을 것이므로 이 경우의 형식은 $E_8$ 하나뿐이다.

# 정의

## 격자, 류, 스피너 류

$V$ 를 $\mathbb Q$ 위의 $n$ 차원 [이차형식](quadratic-forms.md)을 갖춘 [벡터 공간](vector-spaces.md), $L\subset V$ 를 그 위의 격자라 한다.

- $\sigma(L)=L'$ 인 $\sigma\in O(V)$ 가 있으면 $L$ 과 $L'$ 이 **동치(isometric)** 라 하고 $L\cong L'$ 로 쓴다.
- 모든 소수 $p$ 에서 $L_p\cong L'\_p$ 이고 $V\otimes\mathbb R$ 위에서도 동치이면 $L'$ 이 $L$ 과 **같은 류(same genus)** 에 속한다고 하고 $L'\in\mathrm{gen}\thinspace L$ 로 쓴다.
- 위에 더해 국소 동치를 주는 사상들을 스피너 노름이 자명한 회전 $\sigma_p$ 로 고를 수 있으면 $L'$ 이 $L$ 과 **같은 스피너 류(same spinor genus)** 에 속한다고 하고 $L'\in\mathrm{spn}\thinspace L$ 로 쓴다.

여기서 스피너 노름(spinor norm)은 회전군에서 제곱류로 가는 준동형 $\theta:\mathrm{SO}(V)\to\mathbb Q^\times/(\mathbb Q^\times)^2$ 이다. 포함관계는 $\lbrack L\rbrack\subset\mathrm{spn}\thinspace L\subset\mathrm{gen}\thinspace L$ 이다.

$\mathbb Z^2$ 의 표준 내적, 곧 $x^2+y^2$ 의 류에는 동치류가 $\mathbb Z^2$ 하나뿐이다. $L$ 의 모든 벡터의 길이 제곱이 짝수이고 Gram [행렬](matrices.md)의 행렬식이 $1$ 이면 $L$ 을 **짝수 유니모듈러 격자(even unimodular lattice)** 라 한다. 양의 정부호 짝수 유니모듈러 격자는 $8\mid n$ 일 때만 있고, $n=8$ 에서는 $E_8$ 격자가 그 예다.

## 질량

$\mathrm{Aut}L=\lbrace\sigma\in O(V):\sigma(L)=L\rbrace$ 이고, 정부호에서 이것은 유한군이다. 류의 동치류 대표를 $L_1,\dots,L_h$ 라 할 때

$$
\mathrm{mass}(\mathrm{gen}\thinspace L)=\sum_{i=1}^{h}\frac1{\vert\mathrm{Aut}L_i\vert}
$$

를 류의 **질량(mass)** 이라 한다. $\mathbb Z^2$ 의 류에서는 $\mathrm{Aut}\mathbb Z^2$ 가 정사각형의 회전과 뒤집기 $8$ 개이므로 질량이 $1/8$ 이다. $E_8$ 의 류에서는 $\mathrm{Aut}E_8$ 이 위수 $696729600$ 의 Weyl 군이므로 질량이 $1/696729600$ 이다.

# 성질

## Smith–Minkowski–Siegel 질량 공식

질량은 표준 인자와 국소 인자의 곱이다.[^1]

$$
\mathrm{mass}(\mathrm{gen}\thinspace L)
=2\thinspace\pi^{-n(n+1)/4}\prod_{j=1}^{n}\Gamma\negthinspace\left(\frac j2\right)\cdot\prod_{p}\frac{2}{\alpha_p(L)}
$$

$\alpha_p(L)$ 는 $L$ 이 자기 자신을 $\mathbb Z_p$ 위에서 표현하는 국소 밀도(local density)다. 앞의 상수 $2$ 는 $\mathrm{SO}\_n$ 의 [Tamagawa 수](tamagawa-numbers.md)이고, 거의 모든 $p$ 에서 $\alpha_p$ 가 $1$ 에 가까워 곱이 수렴한다. Conway 와 Sloane 이 $\alpha_p$ 를 Jordan 분해에서 계산하는 절차를 정리했다. Minkowski 가 공식을 내놓았고 Siegel 이 일반 차원에서 증명했다.

$8\mid n$ 인 짝수 유니모듈러 격자에서는 국소 인자가 모두 같아 [Bernoulli 수](bernoulli-numbers.md)만 남는다.

$$
\mathrm{mass}(n)=\frac{\vert B_{n/2}\vert}{n}\prod_{j=1}^{n/2-1}\frac{\vert B_{2j}\vert}{4j}
$$

$n=8$ 이면 다음과 같다.

$$
\mathrm{mass}(8)=\frac{1/30}{8}\cdot\frac{1/6}{4}\cdot\frac{1/30}{8}\cdot\frac{1/42}{12}=\frac1{696729600}
$$

$\vert B_{2j}\vert=2(2j)!\zeta(2j)/(2\pi)^{2j}$ 이므로 이 곱은 $\zeta(2)\zeta(4)\cdots$ 의 곱으로도 적힌다.

## 부피 해석

류 전체는 아델 직교군의 이중잉여류 $O(V)(\mathbb Q)\backslash O(V)(\mathbb A)/\prod_v O(L_v)$ 와 대응한다. 왼쪽 몫공간에 [Haar 측도](haar-measure.md)를 주면 각 이중잉여류의 부피가 $1/\vert\mathrm{Aut}L_i\vert$ 에 비례하므로, 질량은 몫공간의 부피다. 부피는 [아델](adeles.md)의 국소 성분마다의 부피의 곱으로 쪼개지고, 질량 공식의 국소 인자가 그 성분이다.

질량 공식은 $\mathrm{SO}\_n$ 의 Tamagawa 수가 $2$ 라는 진술과 동치다. Weil 이 이 동치를 지적했고, 단순연결 반단순군의 Tamagawa 수가 $1$ 이라는 Weil 추측이 증명되면서 질량 공식이 그 따름정리가 되었다.

## Siegel–Weil 공식과의 관계

[Siegel–Weil 공식](siegel-weil.md)은 류 평균 $\sum_i r_{L_i}(m)/\vert\mathrm{Aut}L_i\vert$ 를 국소 밀도의 곱으로 주고, 그 정규화 인자가 질량이다. 각 격자에 조화 다항식의 값을 곱해 더한 가중 질량은 [theta 급수](theta-series.md)의 류 평균이고, Siegel 공식 우변의 [Eisenstein 급수](eisenstein-series.md) 계수가 그 값이다. 질량은 이 가족의 상수항이다.

## 동치류 개수의 하한

모든 격자는 $-\mathrm{id}$ 를 자기동형으로 가지므로 $\vert\mathrm{Aut}L\vert\ge2$ 이고

$$
h\thinspace\ge\thinspace 2\thinspace\mathrm{mass}(\mathrm{gen}\thinspace L)
$$

이다. 반대 방향의 상한은 없다. $n=8$ 처럼 자기동형군이 큰 격자 하나가 작은 질량을 다 채울 수 있다. 질량이 $1$ 보다 작으면 이 하한은 아무것도 주지 않는다.

$n=24$ 의 짝수 유니모듈러 격자의 질량은 다음과 같다.

$$
\mathrm{mass}(24)=\frac{1027637932586061520960267}{129477933340026851560636148613120000000}
$$

이 값은 [Niemeier 격자](niemeier-lattices.md) 24 개의 자기동형군 위수로 만든 가중합과 같다. $n=32$ 에서는 질량이 $4\times 10^7$ 을 넘으므로 격자가 $8\times 10^7$ 개 이상이다.

## 스피너 류와 Eichler 정리

강근사(strong approximation)가 성립하는 군에서는 국소적으로 같은 것이 전역적으로도 같다. 스핀군에는 강근사가 성립하고 직교군과는 스피너 노름만큼 다르므로, 류는 먼저 스피너 류로 갈라지고 그 개수는 국소 계산으로 나오는 $2$ 의 거듭제곱이다.

$V$ 가 부정부호이고 $n\ge3$ 이면 각 스피너 류는 정확히 하나의 동치류를 담는다. 이것이 Eichler 정리(Eichler's theorem)다. 정부호에서는 스피너 류 안의 동치류가 여럿일 수 있고, 질량 공식은 그 개수를 국소 정보로 보이지 않는 가중합으로 다룬다.

류의 모든 격자가 국소적으로 표현하지만 특정 스피너 류의 격자만 실제로 표현하는 정수를 **스피너 예외 정수(spinor exceptional integer)** 라 한다. Siegel 공식은 류 평균만 주므로 이런 정수의 개별 표현을 정하지 못한다.

# 활용

- 분류의 종료 조건. 류 전체를 열거하는 표준 절차는 Kneser 이웃법(Kneser's neighbor method)이다. 격자 $L$ 과 소수 $p$ 에 대해 $\lbrack L:L\cap L'\rbrack=\lbrack L':L\cap L'\rbrack=p$ 인 $L'$ 를 $p$ 이웃이라 하고, 이웃 관계로 [그래프](graphs.md)를 만들면 한 스피너 류가 연결성분 하나가 된다. 그래프를 탐색해 찾은 동치류의 $1/\vert\mathrm{Aut}L_i\vert$ 의 합이 질량과 같아지면 멈춘다. Niemeier 의 24 개 목록과 Conway–Sloane 의 낮은 차원 표가 이 검산을 통과했다.
- 부호의 질량 공식. 길이 $n$ 인 이진 자기쌍대 [부호](error-correcting-codes.md)를 좌표 치환군 $S_n$ 의 작용으로 묶으면 $\sum_{\lbrack C\rbrack}n!/\vert\mathrm{Aut}C\vert=\prod_{i=1}^{n/2-1}(2^i+1)$ 이 성립하고, 우변은 자기쌍대 부호의 총 개수다. Mallows 와 Sloane 이 이 공식으로 짧은 길이의 자기쌍대 부호 분류를 검산했다. 격자와 부호는 구성 A(Construction A)로 이어져 있다.
- 사원수 대수의 질량. Eichler 의 질량 공식은 정부호 [사원수 대수](quaternion-algebras.md)의 좌아이디얼류에 같은 가중합을 쓴다. [유한체](finite-fields.md) 위 [초특이 곡선](supersingular-isogeny-graphs.md)을 자기동형군 크기의 역수로 가중해 세면 $(p-1)/24$ 가 나오고, 이것이 [Jacquet–Langlands 대응](jacquet-langlands.md)을 통해 무게 $2$ 첨점형식의 차원 공식으로 이어진다.

[^1]: 일반 공식과 국소 밀도의 계산 절차는 J. Conway–N. Sloane, *Low-dimensional lattices IV: the mass formula*, Proc. R. Soc. Lond. A 419 (1988). 짝수 유니모듈러 판과 자기동형군 위수 표는 같은 저자의 *Sphere Packings, Lattices and Groups* (3판, 1999) 16 장. 스피너 류와 Eichler 의 정리는 J. Cassels, *Rational Quadratic Forms* (1978) 11 장. Tamagawa 수와의 동치는 A. Weil, *Adeles and Algebraic Groups* (1982). 부호 쪽 질량 공식은 C. Mallows–N. Sloane, *An upper bound for self-dual codes*, Inform. and Control 22 (1973).

# 연관 문서

## 선수지식

- [Siegel–Weil 공식](siegel-weil.md)
- [Bernoulli 수](bernoulli-numbers.md)

## 더 알아보기

- [Niemeier 격자](niemeier-lattices.md)

#number_theory #linear_algebra #theorem
