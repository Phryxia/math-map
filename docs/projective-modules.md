# 사영가군

# 개요

사영가군은 전사 준동형을 따라 사상을 들어 올릴 수 있는 [가군](modules.md)이다. 자유가군은 사영가군이고 역은 성립하지 않는다. 사영성은 $\mathrm{Hom}\_R(P,-)$ 가 완전함자라는 것과 동치이므로, 완전성이 깨지는 자리를 재는 [유도 함자](derived-functors.md)가 사영가군의 분해 위에서 정의된다.

# 직관

$\pi\colon\mathbb Z\to\mathbb Z/2\mathbb Z$ 를 몫사상이라 하자. $f\colon\mathbb Z/2\mathbb Z\to\mathbb Z/2\mathbb Z$ 를 항등사상으로 두고 $\pi\circ g=f$ 인 $\mathbb Z$ 가군 준동형 $g\colon\mathbb Z/2\mathbb Z\to\mathbb Z$ 를 찾는다. $g(1)=n$ 이라 하면 $\mathbb Z/2\mathbb Z$ 에서 $1+1=0$ 이므로 $2n=g(0)=0$ 이고 $\mathbb Z$ 에서 $n=0$ 이다. 그러면 $\pi(g(1))=0$ 인데 $f(1)=1$ 이므로 그런 $g$ 는 없다.

막힌 것은 정의역 $\mathbb Z/2\mathbb Z$ 의 생성원에 관계 $2x=0$ 이 걸려 있어서다. 정의역을 $\mathbb Z$ 로 바꾸면 생성원 $1$ 에 아무 관계가 없으므로, $f(1)$ 의 원상 가운데 하나를 골라 $g(1)$ 로 두는 것으로 준동형이 정해진다. 자유가군이면 기저의 원소마다 원상을 하나씩 고르면 끝난다.

관계가 아예 없어야 하는 것은 아니다. 필요한 것은 전사 준동형을 따라 그런 고르기가 되는 것뿐이고, 그 성질만 뽑아 이름을 붙인 것이 사영가군이다. $R=\mathbb Z/6\mathbb Z$ 에서 $P=\mathbb Z/2\mathbb Z$ 는 $R\cong\mathbb Z/2\mathbb Z\oplus\mathbb Z/3\mathbb Z$ 의 직합인자이므로 고르기가 되지만, 원소가 두 개이고 $R$ 의 거듭제곱은 원소가 $6^n$ 개이므로 자유가군이 아니다.

# 정의

$R$ 를 환, $P$ 를 $R$ 가군이라 하자. $P$ 가 **사영**이라는 것은 모든 전사 $R$ 준동형 $\pi\colon M\to N$ 과 모든 $R$ 준동형 $f\colon P\to N$ 에 대해

$$
\pi\circ g=f
$$

인 $R$ 준동형 $g\colon P\to M$ 이 존재하는 것이다.

가군 $M$ 의 **사영 분해**는 각 $P\_n$ 이 사영가군인 완전열 $\cdots\to P\_1\to P\_0\to M\to 0$ 이다.

# 성질

## 동치 조건

*정리.* $R$ 가군 $P$ 에 대해 다음 넷은 동치다[^1].

1. $P$ 가 사영이다.
2. $\mathrm{Hom}\_R(P,-)$ 가 완전함자다.
3. 모든 전사 준동형 $\pi\colon M\to P$ 가 분해된다. 곧 $\pi\circ s=\mathrm{id}\_P$ 인 $s$ 가 있다.
4. $P$ 가 어떤 자유가군의 직합인자다.

*증명의 요지.* $\mathrm{Hom}\_R(P,-)$ 는 언제나 좌완전이므로 2 는 전사사상을 전사사상으로 보내는 것, 곧 1 이다. 1 에서 3 은 $N=P$, $f=\mathrm{id}$ 를 넣은 경우다. 3 에서 4 는 자유가군의 전사 $F\to P$ 를 잡아 분해하면 $F\cong P\oplus\ker$ 가 되는 것이다. 4 에서 1 은 자유가군에서 기저마다 원상을 골라 들어 올린 뒤 직합인자로 제한하면 된다.

## 국소환 위에서

국소환 위의 유한생성 사영가군은 자유다. [Nakayama 보조정리](nakayama-lemma.md)가 잉여체 위의 기저를 들어 올려 얻은 전사사상의 핵이 $0$ 임을 준다.

## 국소적 자유성

*정리.* $R$ 가 가환환이고 $P$ 가 유한생성 $R$ 가군이면, $P$ 가 사영일 필요충분조건은 모든 소 아이디얼 $\mathfrak p$ 에서 [국소화](localization-rings.md) $P\_\mathfrak p$ 가 $R\_\mathfrak p$ 위의 자유가군인 것이다[^1].

계수 $\mathrm{rank}\_\mathfrak p P=\dim P\_\mathfrak p$ 는 $\mathrm{Spec}\thinspace R$ 에서 국소상수다. $R$ 가 정역이면 $\mathrm{Spec}\thinspace R$ 가 연결이므로 계수가 하나의 수로 정해진다.

## 사영이면서 자유가 아닌 예

[Dedekind 정역](dedekind-domains.md)의 $0$ 이 아닌 아이디얼은 가역이므로 사영가군이고, 주 아이디얼이 아니면 자유가군이 아니다. $R=\mathbb Z\lbrack\sqrt{-5}\rbrack$ 의 아이디얼 $\mathfrak a=(2,1+\sqrt{-5})$ 가 그런 예다. $\mathfrak a^2=(2)$ 이므로 가역이고, $\mathfrak a$ 가 주 아이디얼이면 노름이 $2$ 인 원소가 있어야 하는데 $a^2+5b^2=2$ 에 정수해가 없다.

## 다항식환 위에서

*정리.* $k$ 가 체이면 $k\lbrack x\_1,\dots,x\_n\rbrack$ 위의 유한생성 사영가군은 자유다[^2].

Serre 가 물었고 Quillen 과 Suslin 이 각자 증명했다. 계수가 하나로 정해지는 것은 위의 국소적 자유성에서 나오지만 자유성은 그것으로 따라오지 않는다.

# 활용

- 유도 함자의 사영 분해. $\mathrm{Hom}\_R(P,-)$ 의 완전성이 있어 분해에 함자를 적용한 복합체의 호몰로지가 분해의 선택에 무관하다.
- [대수적 K 이론](algebraic-k-theory.md)의 $K\_0(R)$. 유한생성 사영가군의 동형류를 직합에 대해 Grothendieck 군으로 만든 것이고, $R$ 가 국소환이거나 다항식환이면 위의 두 정리로 $K\_0(R)\cong\mathbb Z$ 가 된다.
- Dedekind 정역의 계수 $n$ 인 사영가군이 $R^{n-1}\oplus I$ 꼴로 분류되는 진술. 아이디얼류군이 자유성에서 벗어나는 정도를 재는 자리다.
- Nakayama 보조정리의 응용 가운데 국소 자유성 판정. 줄기마다 자유라는 조건으로 사영성을 확인한다.

[^1]: C. A. Weibel, *An Introduction to Homological Algebra*, Cambridge University Press, 1994, 2.2 절. 동치 조건 네 개와 가환환 위에서의 국소적 자유성을 다룬다.

[^2]: T. Y. Lam, *Serre's Problem on Projective Modules*, Springer, 2006, 1 장과 5 장. Serre 의 물음과 Quillen, Suslin 의 두 증명을 다룬다.

# 연관 문서

## 선수지식

- [가군](modules.md)
- [Nakayama 보조정리](nakayama-lemma.md)

## 더 알아보기

- [단사가군](injective-modules.md)
- [대수적 K 이론](algebraic-k-theory.md)

#ring_theory #algebra #category_theory
