# Artin–Rees 보조정리

# 개요

**Artin–Rees 보조정리(Artin–Rees lemma)** 는 아이디얼의 거듭제곱으로 재는 "많이 나누어진다" 는 기준이 큰 가군에서 재든 그 부분가군 안에서 재든 몇 단계 차이를 빼고 같다는 보조정리다. 정수 가운데 $12$ 의 배수만 볼 때, $2^n$ 으로 나누어지는 $12$ 의 배수 전체와 $12$ 의 배수에 $2$ 를 거듭 곱한 수 전체는 처음 두 단계만 다르고 그 뒤로는 같은 집합이다. 이 보조정리는 [Noether 환](noetherian-rings.md) 위의 유한생성 가군에서 그 차이가 일정한 단계 수로 묶인다는 것을 보이고, 이로부터 모든 거듭제곱에 들어 있는 원소가 $0$ 뿐이라는 Krull 교차정리(Krull intersection theorem)가 나온다.

# 직관

$\mathbb Z$ 에서 $2^n$ 의 배수이면서 $12$ 의 배수인 정수 전체는 $2^n\mathbb Z\cap 12\mathbb Z$ 이다. $n=1,2$ 이면 $12\mathbb Z$ 이고, $n=3$ 이면 $24\mathbb Z$, $n=4$ 이면 $48\mathbb Z$ 이다. $n\ge 2$ 이면 $3\cdot 2^n\mathbb Z$ 다.

$12\mathbb Z$ 안에서만 보고 원소에 $2$ 를 $m$ 번 곱하면 $2^m\cdot 12\mathbb Z=3\cdot 2^{m+2}\mathbb Z$ 가 나온다. 그래서 $n\ge 2$ 에서 다음이 성립한다.

$$
2^n\mathbb Z\cap 12\mathbb Z=2^{n-2}\left(2^2\mathbb Z\cap 12\mathbb Z\right)
$$

바깥에서 $2^n$ 으로 거른 것이 안에서 $2^{n-2}$ 를 곱한 것과 같고, 어긋나는 것은 처음 두 단계뿐이다. 따라서 $12$ 의 배수 $x$ 가 $2$ 로 많이 나누어진다는 말은 $\mathbb Z$ 에서 재든 $12\mathbb Z$ 안에서 재든 뜻이 같다.

모든 $n$ 에서 $2^n$ 으로 나누어지는 정수는 $0$ 뿐이다. 두 기준이 같으므로 $12\mathbb Z$ 안에서도 모든 $2^m\cdot 12\mathbb Z$ 에 들어 있는 원소는 $0$ 뿐이다.

# 정의

## 아이디얼 진 거름

환 $R$ 의 아이디얼 $I$ 와 $R$ 가군 $M$ 에 대해 부분가군의 열 $M\supseteq IM\supseteq I^2M\supseteq\cdots$ 을 $M$ 의 **I 진 거름(I-adic filtration)** 이라 한다. $x-y\in I^nM$ 인 $n$ 이 클수록 $x$ 와 $y$ 가 가깝다고 보는 위상을 **I 진 위상(I-adic topology)** 이라 한다. 직관 절에서 $R=M=\mathbb Z$, $I=2\mathbb Z$ 이고 $I^nM=2^n\mathbb Z$ 다.

## 진술

Artin–Rees 보조정리는 다음 진술이다. $R$ 가 Noether 환, $I$ 가 아이디얼, $M$ 이 유한생성 $R$ 가군, $N$ 이 $M$ 의 부분가군이면, 정수 $c\ge 0$ 이 있어 모든 $n\ge c$ 에서 다음이 성립한다.

$$
I^nM\cap N=I^{n-c}\left(I^cM\cap N\right)
$$

직관 절에서 $N=12\mathbb Z$ 이고 $c=2$ 다. 이 등식에서 $N$ 위의 두 거름 $I^nM\cap N$ 과 $I^nN$ 은 $I^nN\subseteq I^nM\cap N\subseteq I^{n-c}N$ 을 만족하므로 $N$ 위에 같은 위상을 준다.

# 성질

## 증명의 요지

**Rees 대수(Rees algebra)** $R^\ast=\bigoplus_{n\ge 0}I^n$ 은 $I$ 의 생성원으로 생성되는 $R$ 대수이므로 Hilbert 기저정리(Hilbert's basis theorem)에 따라 Noether 환이다. $M^\ast=\bigoplus_{n\ge 0}I^nM$ 은 $M$ 의 생성원으로 생성되는 $R^\ast$ 가군이고, $N^\ast=\bigoplus_{n\ge 0}(I^nM\cap N)$ 은 그 부분가군이다.

$R^\ast$ 가 Noether 이므로 $N^\ast$ 는 유한생성이다. 생성원의 차수 가운데 가장 큰 것을 $c$ 라 하면, $n\ge c$ 에서 차수 $n$ 의 성분은 차수 $c$ 이하의 생성원에 $I$ 의 원소를 곱해 얻으므로 위 등식이 나온다.

## Krull 교차정리

**Krull 교차정리** 는 다음이다. $R$ 가 Noether 환, $M$ 이 유한생성 $R$ 가군이고 $N=\bigcap_{n\ge 1}I^nM$ 이면 $IN=N$ 이다.

증명의 요지. $N\subseteq I^nM$ 이 모든 $n$ 에서 성립하므로 Artin–Rees 보조정리에서 $n=c+1$ 로 두면 $N=I^{c+1}M\cap N=I(I^cM\cap N)\subseteq IN$ 이다.

[Nakayama 보조정리](nakayama-lemma.md)를 쓰면 두 따름정리가 나온다. $I$ 가 Jacobson 근기(Jacobson radical)에 들면 $N=0$ 이다. 특히 Noether 국소환 $(R,\mathfrak m)$ 에서 $\bigcap_n\mathfrak m^n=0$ 이다. $R$ 가 Noether 정역이고 $I\ne R$ 이면 $\bigcap_nI^n=0$ 이다. $IN=N$ 에서 어떤 $a\in I$ 로 $(1+a)N=0$ 이 되고, $1+a\ne 0$ 이기 때문이다.

## Noether 조건이 없는 경우

$0$ 근방에서 정의된 실수값 매끄러운 함수의 싹(germ)의 환 $R$ 은 $0$ 에서 값이 $0$ 인 싹들의 아이디얼 $\mathfrak m$ 을 유일한 극대 아이디얼로 갖는 국소환이다. $f(x)=e^{-1/x^2}$ ($f(0)=0$) 은 모든 도함수가 $0$ 에서 $0$ 이므로 [Taylor 정리](taylor-theorem.md)에 따라 모든 $n$ 에서 $\mathfrak m^n$ 에 든다. $f\ne 0$ 이므로 $\bigcap_n\mathfrak m^n\ne 0$ 이고, $R$ 은 Noether 환이 아니다.

# 활용

- 완비화의 완전성. Noether 환 $R$ 위의 유한생성 가군에서 $I$ 진 완비화(I-adic completion)를 취하는 연산은 짧은 완전열을 짧은 완전열로 보낸다. 부분가군 $N$ 위에서 $M$ 의 거름을 제한한 것과 $N$ 자신의 거름이 같은 위상을 준다는 것이 그 증명에 쓰인다. 그 결과 완비화 $\widehat R$ 은 $R$ 위의 [평탄 가군](flat-modules.md)이다.
- 국소환을 완비화에 넣기. Krull 교차정리에 따라 Noether 국소환 $R$ 에서 $R\to\widehat R$ 은 단사다. [이산부값환](discrete-valuation-rings.md)의 완비화가 원래 환을 포함하는 것이 그 예다.
- [Hilbert–Samuel 중복도](hilbert-samuel-multiplicity.md). 짧은 완전열의 각 항에서 Hilbert–Samuel 함수를 비교할 때 부분가군 위의 두 거름이 같은 위상을 준다는 것을 써서, 최고차 계수가 더해진다는 것을 보인다.

# 연관 문서

## 선수지식

- [Noether 환](noetherian-rings.md)
- [Nakayama 보조정리](nakayama-lemma.md)

## 더 알아보기

아직 연결한 문서가 없다.

#ring_theory #algebra
