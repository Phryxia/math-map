# 평탄 가군

# 개요

**평탄 가군(flat module)** 은 텐서곱을 취해도 단사 사상이 단사로 남는 가군이다. 정수에 $2$ 를 곱하는 사상 $\mathbb Z\to\mathbb Z$ 는 단사인데, 양쪽에 $\mathbb Z/2\mathbb Z$ 를 텐서하면 모든 원소를 $0$ 으로 보내는 사상이 되고, $\mathbb Q$ 를 텐서하면 유리수에 $2$ 를 곱하는 단사 사상으로 남는다. 평탄 가군은 이 두 경우를 가르는 조건이고, 계수를 바꾸어도 방정식의 해의 공간이나 완전열이 깨지지 않는 가군을 고르는 데 쓴다.

# 직관

[텐서곱](tensor-products.md)을 취하면 $a\otimes m$ 꼴의 원소들 사이에 $ra\otimes m=a\otimes rm$ 이 성립한다. $\mathbb Z/2\mathbb Z$ 에서는 $2m=0$ 이므로 $2a\otimes m=a\otimes 2m=0$ 이 되고, 곱하기 $2$ 의 상이 전부 $0$ 이 된다.

$\mathbb Q$ 에서는 $2m=0$ 인 $m$ 이 $0$ 뿐이다. 그래서 $2a\otimes m$ 이 사라지는 일이 없고 곱하기 $2$ 는 단사로 남는다. $\mathbb Z$ 위에서 단사성을 깨는 것은 어떤 수를 곱해 $0$ 이 되는 원소, 곧 비틀림 원소다.

# 정의

환 $R$ 위의 가군 $M$ 이 다음을 만족하면 **평탄 가군** 이라 한다. 모든 단사 준동형 $N'\to N$ 에 대해 $N'\otimes_RM\to N\otimes_RM$ 이 단사다. 텐서곱은 항상 오른쪽 완전이므로, 평탄은 함자 $-\otimes_RM$ 이 짧은 완전열을 짧은 완전열로 보내는 것과 동치다.

직관 절에서 $\mathbb Q$ 는 $\mathbb Z$ 위의 평탄 가군이고 $\mathbb Z/2\mathbb Z$ 는 아니다. 자유가군 $R^n$ 은 $N\otimes R^n\cong N^n$ 이므로 평탄이다.

# 성질

## Tor 판정

$M$ 이 평탄인 것은 모든 $N$ 에서 $\mathrm{Tor}\_1^R(N,M)=0$ 인 것과 동치다. $\mathrm{Tor}$ 는 [유도 함자](derived-functors.md) 문서의 Tor 함자이고, 짧은 완전열 $0\to N'\to N\to N''\to 0$ 에서 나오는 긴 완전열의 $\mathrm{Tor}\_1^R(N'',M)\to N'\otimes M\to N\otimes M$ 이 판정의 근거다.

$N$ 을 $R/I$ 로만 보아도 된다. $M$ 이 평탄인 것은 모든 유한생성 아이디얼 $I$ 에서 $I\otimes_RM\to M$ 이 단사인 것과 동치다.

## 주 아이디얼 정역 위의 평탄 가군

$R$ 이 주 아이디얼 정역이면 $M$ 이 평탄인 것과 $M$ 에 비틀림 원소가 없는 것이 동치다. 아이디얼 $I=(a)$ 에서 $I\otimes M\to M$ 은 $m\mapsto am$ 과 같으므로, 단사인 것은 $a$ 를 곱해 $0$ 이 되는 $m\ne 0$ 이 없는 것이다. 직관 절의 $\mathbb Q$ 와 $\mathbb Z/2\mathbb Z$ 가 그 두 경우다.

## 사영가군과 국소화

[사영가군](projective-modules.md)은 자유가군의 직합 성분이므로 평탄이다. 곱셈적 부분집합 $S$ 에 대한 [국소화](localization-rings.md) $S^{-1}R$ 은 $R$ 위의 평탄 가군이고, $S^{-1}R\otimes_RN\cong S^{-1}N$ 이 단사를 보존한다. 평탄성은 국소적이다. $M$ 이 평탄인 것은 모든 극대 아이디얼 $\mathfrak m$ 에서 $M\_{\mathfrak m}$ 이 $R\_{\mathfrak m}$ 위의 평탄 가군인 것과 동치다.

## 유한표시 평탄 가군

$M$ 이 유한표시이면 평탄인 것과 사영인 것이 동치다. Noether 국소환 위에서는 유한생성 평탄 가군이 자유가군이다. 증명은 잉여체 위의 기저를 [Nakayama 보조정리](nakayama-lemma.md)로 들어 올려 생성계를 얻고, 핵이 평탄성에 따라 $0$ 임을 보이는 것이다.

## Lazard 정리

**Lazard 정리(Lazard's theorem)** 는 모든 평탄 가군이 유한생성 자유가군들의 방향 극한이라는 정리다. $\mathbb Q$ 는 $\mathbb Z\xrightarrow{\times 2}\mathbb Z\xrightarrow{\times 3}\mathbb Z\xrightarrow{\times 4}\cdots$ 의 방향 극한이고, $n$ 번째 $\mathbb Z$ 가 $\frac{1}{n!}\mathbb Z$ 에 해당한다.

# 활용

- 완비화. [Artin–Rees 보조정리](artin-rees-lemma.md)에 따라 [Noether 환](noetherian-rings.md) $R$ 의 아이디얼 진 완비화 $\widehat R$ 은 $R$ 위의 평탄 가군이다.
- 스칼라 확장. 환 준동형 $R\to S$ 에서 $S$ 가 평탄이면 $R$ 위의 연립일차방정식의 해 가군에 $S$ 를 텐서한 것이 $S$ 위의 같은 방정식의 해 가군이다. 해 가군은 사상의 핵이고, 평탄한 텐서곱은 핵을 보존한다.
- 평탄 사상. 스킴 사이의 사상이 국소환마다 평탄이면 평탄 사상이라 한다. 연결된 기저 위의 사영 평탄족에서는 올들의 Hilbert 다항식이 모두 같다.

# 연관 문서

## 선수지식

- [텐서곱](tensor-products.md)

## 더 알아보기

아직 연결한 문서가 없다.

#ring_theory #algebra
