# Dedekind 정역

# 개요

$\mathbb Z$ 에서 성립하는 소인수분해의 유일성은 정수를 조금만 넓혀도 깨진다. $\mathbb Z[\sqrt{-5}]$ 가 [유일분해정역](unique-factorization-domains.md)이 아니라는 것이 그 예다.

Dedekind 의 복구 방법은 분해의 대상을 원소에서 [아이디얼](ideals-quotient-rings.md)로 바꾸는 것이다. 유일성이 성립하는 환의 부류가 Dedekind 정역이고, 조건은 Noether 이고, 정수적으로 닫혀 있고, 0 이 아닌 소 아이디얼이 모두 극대라는 세 줄이다.

세 조건의 의미는 [국소화](localization-rings.md)에서 드러난다. 각 소 아이디얼에서 국소화하면 이산 부치환이 나오고 거기서는 모든 아이디얼이 한 원소의 거듭제곱으로 생성된다. 전역적 유일분해는 국소적으로 자명한 사실들을 붙인 결과이며, 대수적 정수론과 대수기하가 공유하는 구조다.

# 직관

## 기약원과 소원의 분리

유일분해가 깨지는 자리는 기약원이 소원이 아닌 자리다. $\mathbb Z[\sqrt{-5}]$ 에서 $2$ 는 기약이지만 $2\mid(1+\sqrt{-5})(1-\sqrt{-5})=6$ 이면서 두 인수 어느 쪽도 나누지 않는다. $2$ 의 절반에 해당하는 원소가 환 안에 없다.

## 이상적인 수

없는 원소를 아이디얼이 대신한다. $\mathfrak p=(2,1+\sqrt{-5})$ 를 잡으면 $\mathfrak p^2=(2)$ 이고 $(1+\sqrt{-5})=\mathfrak p\mathfrak q$ 로 쪼개져 두 분해가 같은 소 아이디얼들의 곱으로 합쳐진다. Dedekind 가 이를 이상적인 수라 부른 데서 아이디얼이라는 이름이 나왔다.

## 세 조건의 역할

- Noether 성이 없으면 무한히 쪼개지는 아이디얼이 생겨 분해가 끝나지 않는다.
- 정수적으로 닫혀 있지 않으면 환이 원소를 빠뜨린다. $\mathbb Z[\sqrt{-3}]$ 은 $\frac{1+\sqrt{-3}}2$ 를 놓쳐 $(2)$ 가 소 아이디얼의 곱으로 쓰이지 않는다. 정수적 폐포를 취하면 고쳐진다.
- 차원이 1 이 아니면 소 아이디얼 사이의 포함관계가 층을 이뤄 소인수의 층위가 정해지지 않는다. $k[x,y]$ 의 $(x)\subset(x,y)$ 가 그 예다.

## 국소화

$\mathfrak p$ 에서 국소화한 $\mathcal O_{\mathfrak p}$ 는 극대 아이디얼이 하나뿐인 1 차원 정역이고, 위 세 조건 아래에서 그 극대 아이디얼이 주 아이디얼 $(\pi)$ 다. 모든 원소가 $u\pi^k$ 꼴로 유일하게 쓰이므로 분해가 자명하다.

전역의 아이디얼은 모든 국소화에서의 지수 $v_{\mathfrak p}(\mathfrak a)$ 로 결정된다. 유일분해는 각 소마다 지수를 하나씩 읽는 진술이 된다.

# 정의

## Dedekind 정역

정역 $R$ 이 다음 셋을 만족하면 **Dedekind 정역**이다.

- Noether: 모든 아이디얼이 유한생성이다.
- 정수적으로 닫힘: 분수체 $K$ 의 원소가 $R$ 계수 일계수 다항식의 근이면 그 원소가 $R$ 에 있다.
- 차원 1: 0 이 아닌 모든 소 아이디얼이 극대다.

체는 정의상 제외하거나 자명한 경우로 포함한다(문헌마다 다르다).

## 이산 부치환

극대 아이디얼이 하나뿐인 Dedekind 정역이 **이산 부치환**(DVR)이다. 다음이 동치다.

- 국소 주 아이디얼 정역이면서 체가 아니다.
- 극대 아이디얼이 $(\pi)$ 로 생성되고 0 이 아닌 모든 아이디얼이 $(\pi^k)$ 다.
- 분수체에 전사인 부치 $v:K^\times\to\mathbb Z$ 가 있어 $R=\lbrace x:v(x)\ge0\rbrace\cup\lbrace 0\rbrace$ 이다.

$\pi$ 를 균등화원이라 한다. $\mathbb Z_{(p)}$ , $p$ 진 정수환 $\mathbb Z_p$ , 형식적 멱급수환 $k[[t]]$ 가 표준 예다.

## 분수 아이디얼

$K$ 의 $R$ 부분가군 $I$ 중 $dI\subseteq R$ 인 $d\in R\setminus\lbrace 0\rbrace$ 가 존재하는 것이 **분수 아이디얼**이다. 곱은 원소들의 곱이 생성하는 가군이다.

$I$ 가 가역이라는 것은 $IJ=R$ 인 $J$ 가 있다는 뜻이고, 그때 $J=\lbrace x\in K:xI\subseteq R\rbrace$ 로 유일하다.

## 부치와 지수

Dedekind 정역의 각 소 아이디얼 $\mathfrak p$ 에 대해 국소화 $R_{\mathfrak p}$ 가 DVR 이고 그 부치를 $v_{\mathfrak p}$ 로 쓴다. 0 이 아닌 분수 아이디얼 $I$ 에 대해 $v_{\mathfrak p}(I)$ 는 $IR_{\mathfrak p}=\mathfrak p^{k}R_{\mathfrak p}$ 인 $k$ 다.

# 성질

## 동치인 특징들

정역 $R$ 에 대해 다음이 동치다.

- $R$ 이 Dedekind 정역이다.
- 0 이 아닌 모든 아이디얼이 소 아이디얼의 곱으로 유일하게 쓰인다.
- 0 이 아닌 모든 분수 아이디얼이 가역이다. 곧 분수 아이디얼 전체가 군을 이룬다.
- $R$ 이 Noether 이고 모든 국소화 $R_{\mathfrak p}$ 가 DVR 이다.
- $R$ 이 Noether 이고 1 차원이며 모든 아이디얼이 원소 두 개로 생성된다.

마지막 항목에서 아이디얼은 언제나 $(\alpha,\beta)$ 꼴이며 $\alpha$ 는 0 이 아닌 원소 중 아무거나 골라도 된다.

## 유일분해

$$
\mathfrak a=\prod_{\mathfrak p}\mathfrak p^{\thinspace v_{\mathfrak p}(\mathfrak a)}
$$

유한 개의 $\mathfrak p$ 에서만 지수가 0 이 아니다. 분수 아이디얼에서는 지수가 음수일 수 있고, 분수 아이디얼군은 소 아이디얼을 기저로 하는 자유 아벨군 $\bigoplus_{\mathfrak p}\mathbb Z$ 와 동형이다.

포함관계와 나눗셈이 일치한다. $\mathfrak a\subseteq\mathfrak b\iff\mathfrak b\mid\mathfrak a$ 이며, 나누는 것이 품는 것이라는 표어로 불린다.

## 유수군

주 분수 아이디얼이 부분군을 이루므로 몫을 취한다.

$$
\mathrm{Cl}(R)=\frac{\lbrace\text{분수 아이디얼}\rbrace}{\lbrace\text{주 분수 아이디얼}\rbrace}
$$

$\mathrm{Cl}(R)=1$ 인 것과 $R$ 이 주 아이디얼 정역인 것과 유일분해 정역인 것이 동치다. 일반 Noether 정역에서 주 아이디얼 정역은 유일분해 정역보다 강한 조건이지만 Dedekind 정역에서는 두 개념이 일치한다.

$R$ 이 [대수적 수체](algebraic-number-fields.md)의 정수환이면 유수군이 유한하다. 일반 Dedekind 정역에서는 그렇지 않고, Claborn 의 정리에 따르면 임의의 아벨군이 어떤 Dedekind 정역의 유수군이 된다.

## 예와 비예

Dedekind 정역인 것.

- $\mathbb Z$ 와 체 위의 다항식환 $k[t]$ 를 비롯한 모든 주 아이디얼 정역.
- 수체의 정수환 $\mathcal O_K$ .
- 체 위의 비특이 아핀 곡선의 좌표환.

아닌 것.

- $\mathbb Z[\sqrt{-3}]$ 은 정수적으로 닫혀 있지 않다. 폐포 $\mathbb Z[\frac{1+\sqrt{-3}}2]$ 는 Dedekind 다.
- $k[x,y]$ 는 차원이 2 다. 유일분해 정역이지만 Dedekind 는 아니다.
- $k[x,y]/(y^2-x^3)$ 은 첨점이 있는 곡선이라 특이점에서 정수적으로 닫히지 않는다. 정수적 폐포를 취하는 것이 기하적으로 특이점 해소다.

정수적으로 닫혀 있다는 조건이 곡선이 매끄럽다는 조건에, 아이디얼의 유일분해가 점마다 소멸 차수를 읽는 것에 대응한다.

# 활용

- 수체의 정수환이 Dedekind 정역이라는 정리에서 소수의 분해 $p\mathcal O_K=\prod\mathfrak p_i^{e_i}$ , 등식 $\sum e_if_i=n$ , 분기 소수가 판별식을 나누는 유한 개뿐이라는 사실이 나온다. $\mathbb Z[x]/(f)$ 는 정수적으로 닫혀 있지 않은 경우가 흔해 정수적 폐포 계산이 첫 단계이고, Round 2 나 Pohst–Zassenhaus 알고리즘이 그 일을 한다. 판별식의 제곱인수를 찾는 것이 병목이다.
- 비특이 아핀 곡선의 좌표환이 Dedekind 정역이고 소 아이디얼이 곡선의 점에 대응한다. 부치 $v_{\mathfrak p}(f)$ 는 $f$ 가 점 $\mathfrak p$ 에서 갖는 소멸 차수이고 아이디얼의 유일분해가 인자의 언어가 된다. 이때 유수군은 [Picard 군](picard-group.md)이며 타원곡선의 군 구조가 그 예다.
- Dedekind 정역 위의 유한생성 가군은 비틀림 부분과 자유 부분으로 갈리고, 계수 $n$ 인 사영 가군은 $R^{n-1}\oplus I$ 꼴이다. 두 가군의 동형은 계수와 유수류가 같은 것과 동치다. [주 아이디얼 정역 위의 가군 구조 정리](finitely-generated-modules.md)가 유수 1 인 특수한 경우다.
- 아이디얼과 가군의 성질이 모든 국소화에서의 성질로 환원된다. 같은 사고가 층과 스킴의 언어로 일반화되어 정칙 국소환이 매끄러운 점에, 차원 1 인 경우가 곡선에 대응한다.

# 연관 문서

## 선수지식

- [유일분해정역](unique-factorization-domains.md)
- [환의 국소화](localization-rings.md)
- [정수론 개관](number-theory-overview.md)

## 더 알아보기

- [대수적 수체와 정수환](algebraic-number-fields.md)

#ring_theory #algebra #number_theory
