# 초월차수

# 개요

**초월차수(transcendence degree)** 는 체의 확대에 서로 대수적 관계가 없는 원소가 최대 몇 개 들어 있는지를 센 수다. $s^2=t^3+1$ 로 정한 체 $\mathbb Q(t,s)$ 와 두 변수 유리함수체 $\mathbb Q(x,y)$ 는 $\mathbb Q$ 위의 차수가 모두 무한이어서 차수로는 가를 수 없다. 초월차수는 앞의 체에서 $t$ 하나, 뒤의 체에서 $x,y$ 둘을 독립인 원소로 세어 두 체를 $1$ 과 $2$ 로 가르고, 대수다양체의 차원은 함수체의 초월차수로 정의된다.

# 직관

$K=\mathbb Q(t,s)$, $s^2=t^3+1$ 인 체를 본다. $1,t,t^2,\dots$ 이 모두 일차독립이므로 $\mathbb Q$ 위의 차수는 무한이다. 그래서 차수로는 이 체와 두 변수 유리함수체 $\mathbb Q(x,y)$ 를 가를 수 없다.

$t$ 는 어떤 유리계수 다항식의 근도 아니다. $s$ 는 $\mathbb Q(t)$ 위의 다항식 $X^2-(t^3+1)$ 의 근이므로 $\mathbb Q(t)\subseteq K$ 는 차수 $2$ 의 유한 확대다. 그러면 $K$ 의 원소는 모두 $t$ 하나로 적은 대수 방정식을 만족하고, $K$ 에 들어 있는 자유로운 변수는 $t$ 하나다.

$t$ 대신 $s$ 를 고를 수도 있다. $t^3=s^2-1$ 이므로 $K$ 는 $\mathbb Q(s)$ 위의 차수 $3$ 확대다. 고른 원소는 바뀌어도 개수는 $1$ 로 같고, 이 개수가 곡선 $s^2=t^3+1$ 의 차원이다.

# 정의

$L/K$ 를 [체의 확대](field-extensions.md)라 한다.

## 대수적 독립

**대수적으로 독립(algebraically independent)** 인 집합은 서로 다른 유한 개의 원소 $s_1,\dots,s_n$ 을 어떻게 골라도 $f(s_1,\dots,s_n)=0$ 인 $0$ 아닌 $f\in K\lbrack X_1,\dots,X_n\rbrack$ 이 없는 $S\subseteq L$ 이다. 직관 절의 $K=\mathbb Q(t,s)$ 에서 $\lbrace t\rbrace$ 는 $\mathbb Q$ 위에서 대수적으로 독립이고, $\lbrace t,s\rbrace$ 는 $f=X_2^2-X_1^3-1$ 이 $f(t,s)=0$ 을 만족하므로 독립이 아니다. $\mathbb Q(x,y)$ 에서 $\lbrace x,y\rbrace$ 는 독립이다.

## 초월기저와 초월차수

**초월기저(transcendence basis)** 는 $K$ 위에서 대수적으로 독립이고 $L$ 이 $K(S)$ 위에서 대수적이 되는 $S\subseteq L$ 이다. **초월차수(transcendence degree)** 는 초월기저의 크기이고 $\mathrm{trdeg}\_K L$ 로 쓴다. 직관 절에서 $\lbrace t\rbrace$ 와 $\lbrace s\rbrace$ 가 둘 다 $\mathbb Q(t,s)/\mathbb Q$ 의 초월기저이므로 초월차수는 $1$ 이다. $\mathbb Q(x,y)/\mathbb Q$ 의 초월기저는 $\lbrace x,y\rbrace$ 이고 초월차수는 $2$ 다. $\mathbb Q(\sqrt2)/\mathbb Q$ 의 초월기저는 공집합이고 초월차수는 $0$ 이다.

**순초월 확대(purely transcendental extension)** 는 $L=K(S)$ 인 초월기저 $S$ 가 있는 확대다. $\mathbb Q(x,y)/\mathbb Q$ 는 순초월 확대이고, $\mathbb Q(t,s)/\mathbb Q(t)$ 는 초월차수가 $0$ 인 차수 $2$ 확대이므로 순초월 확대가 아니다.

# 성질

## 독립 집합이 생성하는 체

$S$ 가 $K$ 위에서 대수적으로 독립이면 $K(S)$ 는 $S$ 를 변수로 하는 유리함수체와 동형이다. $\mathrm{trdeg}\_K L=0$ 인 것은 $L/K$ 가 대수 확대인 것과 동치다.

## 교환 정리

**정리.** 초월기저가 존재하고 모든 초월기저의 크기가 같다.[^1]

*증명의 요지.* 대수적으로 독립인 집합의 사슬의 합집합은 대수적으로 독립이므로 [선택공리](axiom-of-choice.md)의 Zorn 보조정리로 극대 독립 집합이 있고, 그것이 초월기저다. 크기가 같다는 것은 교환 성질에서 나온다. $y$ 가 $K(S\cup\lbrace x\rbrace)$ 위에서 대수적이고 $K(S)$ 위에서는 아니면 $x$ 가 $K(S\cup\lbrace y\rbrace)$ 위에서 대수적이다. 이 성질로 한 기저의 원소를 다른 기저의 원소로 하나씩 바꿔 넣는다.

교환 성질은 일차독립의 교환 성질과 같은 꼴이고, 대수적 독립은 [Matroid](matroids.md)의 예다.

## 탑에서의 덧셈

$K\subseteq L\subseteq M$ 이면

$$
\mathrm{trdeg}\_K M=\mathrm{trdeg}\_L M+\mathrm{trdeg}\_K L
$$

이다. $L/K$ 의 초월기저와 $M/L$ 의 초월기저의 합집합이 $M/K$ 의 초월기저다.

## 대수적으로 닫힌 체의 분류

대수적으로 닫힌 체는 표수와 소체 위의 초월차수로 동형을 법으로 결정된다. 초월기저 사이의 전단사를 순초월 확대의 동형으로 늘리고, 대수적 폐포의 유일성으로 확장한다.

$\mathbb C$ 의 $\mathbb Q$ 위 초월차수는 $\mathbb C$ 의 기수 $2^{\aleph_0}$ 이다. $p$ 진수체의 대수적 폐포의 완비화 $\mathbb C_p$ 도 표수 $0$ 이고 초월차수가 $2^{\aleph_0}$ 이므로, 체로서 $\mathbb C\cong\mathbb C_p$ 다. 이 동형은 선택공리로만 주어지고 위상을 보존하지 않는다.

## 대수다양체의 차원

체 $k$ 위의 기약 [대수다양체](algebraic-varieties.md) $X$ 의 함수체를 $k(X)$ 라 하면

$$
\dim X=\mathrm{trdeg}\_k\thinspace k(X)
$$

이고, 이 값이 좌표환의 [Krull 차원](krull-dimension.md)과 같다. 증명은 [Noether 정규화](noether-normalization.md)로 좌표환을 다항식환 $k\lbrack y_1,\dots,y_d\rbrack$ 위의 유한 가군으로 만들어 $d$ 를 양쪽에서 읽는다.

## Lindemann–Weierstrass 정리

**Lindemann–Weierstrass 정리(Lindemann–Weierstrass theorem).** 대수적 수 $\alpha_1,\dots,\alpha_n$ 이 $\mathbb Q$ 위에서 일차독립이면 $e^{\alpha_1},\dots,e^{\alpha_n}$ 은 $\mathbb Q$ 위에서 대수적으로 독립이다.[^2]

$n=1$, $\alpha_1=1$ 에서 $e$ 가 초월수이고, $\alpha_1=\pi i$ 로 두면 $e^{\pi i}=-1$ 이 대수적이므로 $\pi i$ 가, 따라서 $\pi$ 가 초월수다. [복소수](complex-numbers.md) $z_1,\dots,z_n$ 이 $\mathbb Q$ 위에서 일차독립이면 $\mathrm{trdeg}\_{\mathbb Q}\mathbb Q(z_1,\dots,z_n,e^{z_1},\dots,e^{z_n})\ge n$ 이라는 진술이 Schanuel 추측(Schanuel's conjecture)이다.

# 활용

- [Morley 범주성 정리](morley-categoricity.md): 표수 $0$ 인 대수적으로 닫힌 체의 이론에서 크기 $\kappa\gt\aleph_0$ 인 모형은 초월차수가 $\kappa$ 인 것 하나뿐이므로 비가산 범주적이다.
- Krull 차원: 체 위의 유한생성 정역의 Krull 차원이 분수체의 초월차수다.
- [Riemann 곡면](riemann-surfaces.md): 콤팩트 Riemann 곡면이 $\mathbb C$ 위 초월차수 $1$ 의 함수체와 일대일로 대응한다.
- [초월수](transcendental-numbers.md): 수의 집합이 대수적으로 독립인지를 묻는 정리들이 초월차수의 하한으로 진술된다.

[^1]: S. Lang, *Algebra*, 개정 3판, Graduate Texts in Mathematics 211, Springer, 2002, 8장 1절.
[^2]: A. Baker, *Transcendental Number Theory*, Cambridge University Press, 1975, 1장.

# 연관 문서

## 선수지식

- [체의 확대](field-extensions.md)

## 더 알아보기

- [Noether 정규화](noether-normalization.md)

#field_theory #algebra #logic
