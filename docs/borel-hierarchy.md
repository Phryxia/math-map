# Borel 계층

# 개요

Borel 집합은 열린집합에서 가산 합집합과 여집합을 되풀이해 얻는 집합이다. 되풀이한 횟수를 [서수](ordinals.md)로 매긴 것이 Borel 계층이고, 계층은 $\omega_1$ 단계에서 닫히며 그 아래 각 단계는 진짜로 커진다. 계층의 한 단계는 그 집합을 정의하는 논리식의 양화사 교대 횟수와 같다.

# 직관

[측도](measure.md)를 정의할 때 Borel 집합은 "열린집합을 모두 포함하는 가장 작은 $\sigma$ 대수" 로 주어진다. 이 정의로는 주어진 집합이 Borel 인지 판정할 수 없다. 판정하려면 그 집합을 열린집합에서 어떤 연산으로 만들었는지 따라가야 한다.

$\mathbb R$ 의 유리수 집합을 따라간다. 한 점 $\lbrace q\rbrace$ 는 닫힌집합이고 유리수는 셀 수 있으므로 $\mathbb Q=\bigcup_n\lbrace q_n\rbrace$ 은 닫힌집합의 가산 합집합이다. 여집합을 취하면 무리수 집합은 열린집합의 가산 교집합이다. 두 집합 모두 열린집합에서 연산 두 번으로 닿는다.

연산을 세 번 써야 닿는 집합도 있다. 함수열 $f_n\colon\lbrack 0,1\rbrack\to\mathbb R$ 이 수렴하는 점들의 집합은

$$
C=\bigcap_{k}\bigcup_{N}\bigcap_{m,n\ge N}\lbrace x:\lvert f_m(x)-f_n(x)\rvert\lt 1/k\rbrace
$$

이다. 안쪽 집합이 열린집합이면 교집합, 합집합, 교집합을 차례로 써서 $C$ 에 닿는다. 유리수는 두 번, 수렴점 집합은 세 번이다.

되풀이 횟수를 계속 늘리면 어디서 멈추는가. 각 단계에서 얻은 집합들의 가산 합집합을 다시 취하는 일이 끝나지 않으므로 유한 단계로는 멈추지 않고, 단계를 초한으로 이어야 한다. 그 단계를 세는 눈금이 가산 서수다.

# 정의

## Polish 공간

**Polish 공간**은 완비 가분 [거리 공간](metric-spaces.md)이다. $\mathbb R$ , $\lbrack 0,1\rbrack$ , $\mathbb R^n$ , 가분 [Banach 공간](banach-spaces.md)이 그 예다. 자연수열의 공간

$$
\mathcal N=\mathbb N^{\mathbb N}
$$

에 두 수열이 처음 달라지는 자리로 정한 거리를 주면 Polish 공간이고, 이것을 **Baire 공간**이라 한다. 비가산 Polish 공간은 모두 Baire 공간의 연속 단사상을 통해 서로 견줄 수 있어, 계층의 이론은 Baire 공간 하나에서 전개된다.

## 계층

Polish 공간 $X$ 에서 $\Sigma^0_1$ 은 열린집합 전체다. 가산 서수 $\alpha\ge 2$ 에 대해

$$
\Pi^0_\alpha=\lbrace X\setminus A:A\in\Sigma^0_\alpha\rbrace,\qquad
\Sigma^0_\alpha=\Big\lbrace\bigcup_{n\in\mathbb N}A_n:A_n\in\Pi^0_{\beta_n},\thickspace\beta_n\lt\alpha\Big\rbrace
$$

로 정의하고 $\Delta^0_\alpha=\Sigma^0_\alpha\cap\Pi^0_\alpha$ 로 둔다. $\Sigma^0_1$ 이 열린집합, $\Pi^0_1$ 이 닫힌집합, $\Sigma^0_2$ 가 닫힌집합의 가산 합집합, $\Pi^0_2$ 가 열린집합의 가산 교집합이다. 고전적 이름으로 $\Sigma^0_2$ 는 $F\_\sigma$ , $\Pi^0_2$ 는 $G\_\delta$ 다.

**Borel 집합**은 어떤 가산 서수 $\alpha$ 에서 $\Sigma^0_\alpha$ 에 드는 집합이다.

$$
\mathcal B(X)=\bigcup_{\alpha\lt\omega_1}\Sigma^0_\alpha
$$

## 사영 계층의 첫 단계

$A\subseteq X$ 가 Polish 공간 $Y$ 의 Borel 집합 $B\subseteq X\times Y$ 의 사영

$$
A=\lbrace x\in X:\exists y\in Y\thickspace (x,y)\in B\rbrace
$$

로 쓰이면 $A$ 는 **해석적 집합**이고 $\Sigma^1_1$ 에 든다. 해석적 집합의 여집합은 **여해석적 집합**이고 $\Pi^1_1$ 에 든다. $\Delta^1_1=\Sigma^1_1\cap\Pi^1_1$ 이다.

# 성질

## 계층의 닫힘

$\mathcal B(X)$ 는 열린집합을 포함하는 가장 작은 $\sigma$ 대수다. 가산 합집합에 닫혀 있음을 보이면 된다. $A_n\in\Sigma^0_{\alpha_n}$ 이고 $\alpha_n\lt\omega_1$ 이면 $\sup_n\alpha_n\lt\omega_1$ 이므로 $\bigcup_n A_n$ 이 $\Sigma^0_{\sup_n\alpha_n+1}$ 에 든다. $\omega_1$ 이 정칙 [기수](cardinality.md)라는 것, 곧 가산 개의 가산 서수의 상한이 다시 가산이라는 것이 이 단계를 준다. 여집합에 닫힌 것은 $\Sigma$ 와 $\Pi$ 의 정의에서 곧바로 나온다.

## 계층의 진성

비가산 Polish 공간에서 $\alpha\lt\beta\lt\omega_1$ 이면 $\Sigma^0_\alpha\subsetneq\Sigma^0_\beta$ 이고 $\Sigma^0_\alpha\ne\Pi^0_\alpha$ 다.[^1] 증명은 보편집합과 대각화다. 각 $\alpha$ 마다 $U\subseteq\mathcal N\times X$ 가 $\Sigma^0_\alpha$ 에 들고 모든 $\Sigma^0_\alpha$ 집합 $A$ 에 대해 $A=\lbrace x:(z,x)\in U\rbrace$ 인 $z$ 가 있게 잡을 수 있다. $X=\mathcal N$ 으로 두고 $D=\lbrace z:(z,z)\notin U\rbrace$ 를 보면 $D\in\Pi^0_\alpha$ 이고, $D$ 가 $\Sigma^0_\alpha$ 에 들면 $D=\lbrace z:(z_0,z)\in U\rbrace$ 인 $z_0$ 에서 $z_0\in D\iff z_0\notin D$ 가 나와 모순이다.

## 사영과 Suslin 정리

Borel 집합의 연속상은 해석적이고, Borel 이 아닌 해석적 집합이 있다. 사영은 $\exists y$ 를 붙이는 연산이고 이 양화사는 비가산 집합 위를 달리므로 가산 합집합으로 대신할 수 없다.

> **정리 (Suslin).** Polish 공간에서 $\Delta^1_1=\mathcal B(X)$ 다. 곧 해석적이면서 여해석적인 집합은 Borel 이다.[^2]

증명의 요지는 해석적 집합과 여해석적 집합을 각각 나무로 표현하고, 두 나무가 함께 주는 분리 성질에서 Borel 집합을 초한 귀납으로 구성하는 것이다. 이 정리는 $\Sigma^1_1$ 단계에서 계층이 두 겹으로 갈라지는 자리를 정확히 Borel 로 지목한다.

## 효과적 계층

$\Sigma^0_\alpha$ 의 정의에서 가산 합집합의 지표를 임의로 두는 대신 계산 가능한 함수로 주면 효과적 판본 $\Sigma^0_\alpha$ 의 밑줄 없는 형태를 얻는다. 이 판본에서 $\Delta^1_1$ 은 [초산술적 계층](hyperarithmetical-hierarchy.md)의 초산술적 집합 전체 $\mathrm{HYP}$ 와 같고, 이것이 Suslin 정리의 계산 가능성 판본이다.[^3] [해석적 계층](analytical-hierarchy.md)의 $\Sigma^1_n$ 은 같은 지표를 자연수 집합 위에서 읽은 것이고, 사영 계층은 그것을 Polish 공간 위에서 읽은 것이다.

# 활용

- Borel 집합에 정의된 $\sigma$ 유한 측도의 정칙성은 계층의 낮은 단계에서 확인한다. Borel 측도에서 임의의 Borel 집합은 $\Pi^0_2$ 집합으로 밖에서, $\Sigma^0_2$ 집합으로 안에서 근사된다.
- [Baire 범주 정리](baire-category.md)의 진술에 나오는 조밀 열린집합의 가산 교집합이 $\Pi^0_2$ 집합이다. 조밀 $\Pi^0_2$ 집합이 "거의 모든 점" 의 위상적 판본이 된다.
- [가측함수](measurable-functions.md)의 연속점 집합은 $\Pi^0_2$ 이고, 함수열의 수렴점 집합은 $\Pi^0_3$ 이다. 이 단계가 Baire 의 함수 분류와 대응한다.
- 확률에서 꼬리 사건은 가산 교집합과 합집합의 교대로 쓰이므로 계층의 단계가 사건의 서술 복잡도를 잰다.

[^1]: A. S. Kechris, *Classical Descriptive Set Theory*, Springer Graduate Texts in Mathematics 156 (1995), 22.4절. 비가산 Polish 공간에서 보편집합과 대각화로 계층의 진성을 얻는다.

[^2]: Kechris, 같은 책, 14.11절. Suslin 정리와 분리 정리의 증명.

[^3]: Y. N. Moschovakis, *Descriptive Set Theory*, 2판, American Mathematical Society (2009), 7A절. 효과적 계층에서 $\Delta^1_1$ 과 초산술적 집합의 일치.

# 연관 문서

## 선수지식

- [거리 공간](metric-spaces.md)
- [서수](ordinals.md)
- [측도](measure.md)

## 더 알아보기

아직 연결한 문서가 없다.

#set_theory #topology #measure_theory #logic
