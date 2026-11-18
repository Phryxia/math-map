# Schanuel 추측

# 개요

**Schanuel 추측(Schanuel's conjecture)** 은 수 $z$ 와 지수함수의 값 $e^z$ 사이에 다항식 관계가 얼마나 적은지에 대한 추측이다. $e$ 와 $\pi$ 는 각각 [초월수](transcendental-numbers.md)로 증명되어 있지만, 그것만으로는 $e+\pi$ 가 초월수인지 정해지지 않는다. $e$ 와 $1-e$ 도 둘 다 초월수인데 합이 $1$ 이기 때문이다. 이 추측은 이런 수들 사이에 성립하는 다항식 관계의 개수에 상한을 주고, 거기서 $e$ 와 $\pi$ 사이에 다항식 관계가 하나도 없다는 결론이 나온다.

# 직관

$e+\pi$ 가 어떤 유리계수 다항식의 근이 아니라는 것을 보이려면, $e$ 와 $\pi$ 를 함께 넣은 다항식 $f(e,\pi)$ 가 $f\ne 0$ 이면 $0$ 이 아니라는 것을 보여야 한다. 이 성질을 대수적 독립이라 한다. $e$ 와 $\pi$ 가 대수적으로 독립이면 $e+\pi$, $e\pi$, $e^2+\pi^3$ 이 모두 초월수다.

$e$ 와 $\pi$ 를 지수함수의 표로 적는다. $z=1$ 이면 $e^z=e$ 이고, $z=\pi i$ 이면 $e^z=-1$ 이다. 네 수 $1,\thinspace\pi i,\thinspace e,\thinspace -1$ 가운데 유리수가 아닌 것은 $\pi i$ 와 $e$ 둘이다.

입력 두 개 $1,\pi i$ 에서 지수함수가 새 수를 만들 때, 입력과 출력을 합친 네 수 가운데 서로 다항식 관계가 없는 것이 적어도 두 개 남는다고 하자. 남을 수 있는 후보는 $\pi i$ 와 $e$ 뿐이므로 둘은 대수적으로 독립이고, $\pi$ 와 $e$ 도 그렇다. Schanuel 추측은 입력이 $n$ 개일 때 이 "적어도 $n$ 개" 를 진술한다.

입력 사이에 유리수 계수의 일차 관계가 있으면 이 개수는 줄어든다. $z_1=1$, $z_2=2$ 이면 $e^{z_2}=(e^{z_1})^2$ 이어서 네 수 $1,2,e,e^2$ 가운데 독립인 것은 $e$ 하나뿐이다. 그래서 추측은 입력이 유리수 위에서 일차독립일 것을 가정한다.

# 정의

[초월차수](transcendence-degree.md) $\mathrm{trdeg}\_{\mathbb Q}$ 는 $\mathbb Q$ 위에서 대수적으로 독립인 원소의 최대 개수다. Schanuel 추측은 다음 진술이다. [복소수](complex-numbers.md) $z_1,\dots,z_n$ 이 $\mathbb Q$ 위에서 일차독립이면 다음이 성립한다.

$$
\mathrm{trdeg}\_{\mathbb Q}\thinspace\mathbb Q(z_1,\dots,z_n,e^{z_1},\dots,e^{z_n})\ge n
$$

S. Schanuel 이 1960 년대에 내놓았고 S. Lang 의 1966 년 책에 실렸다[^1]. 직관 절의 $z_1=1$, $z_2=\pi i$ 는 $\pi i$ 가 실수가 아니므로 $\mathbb Q$ 위에서 일차독립이고, 체는 $\mathbb Q(\pi i,e)$ 이다. 추측은 이 체의 초월차수가 $2$ 라는 것, 곧 $\pi i$ 와 $e$ 가 대수적으로 독립이라는 것이다.

# 성질

## 증명된 경우

$n=1$ 이면 추측은 $z\ne 0$ 일 때 $z$ 와 $e^z$ 가 둘 다 대수적 수일 수는 없다는 진술이다. 이것이 Hermite–Lindemann 정리(Hermite–Lindemann theorem)이고 증명되어 있다.

$z_1,\dots,z_n$ 이 모두 대수적 수이면 체 $\mathbb Q(z,e^z)$ 의 초월차수는 $\mathbb Q(e^{z_1},\dots,e^{z_n})$ 의 초월차수와 같다. Lindemann–Weierstrass 정리(Lindemann–Weierstrass theorem)가 이 $n$ 개의 값이 대수적으로 독립임을 보이므로, 이 경우 추측이 성립한다[^2].

## 로그의 대수적 독립

$\alpha_1,\dots,\alpha_n$ 이 $0$ 이 아닌 대수적 수이고 $\log\alpha_1,\dots,\log\alpha_n$ 이 $\mathbb Q$ 위에서 일차독립이라 한다. $z_i=\log\alpha_i$ 로 두면 $e^{z_i}=\alpha_i$ 가 대수적이므로, 추측은 다음을 함의한다.

$$
\mathrm{trdeg}\_{\mathbb Q}\thinspace\mathbb Q(\log\alpha_1,\dots,\log\alpha_n)=n
$$

곧 로그들이 대수적으로 독립이다. [Baker 정리](baker-theorem.md)가 증명한 것은 같은 가정에서 로그들이 대수적 수 위에서 일차독립이라는 것이고, 대수적 독립은 그보다 강한 진술이다.

## Ax 정리

**Ax 정리(Ax's theorem)** 는 추측의 함수판이다. 형식적 멱급수 $y_1,\dots,y_n\in\mathbb C\lbrack\lbrack t\rbrack\rbrack$ 가 있고, 상수항을 뺀 $y_i-y_i(0)$ 들이 $\mathbb Q$ 위에서 일차독립이면 다음이 성립한다.

$$
\mathrm{trdeg}\_{\mathbb C}\thinspace\mathbb C(y_1,\dots,y_n,e^{y_1},\dots,e^{y_n})\ge n+1
$$

J. Ax 가 1971 년에 미분대수로 증명했다[^3]. 수 대신 변수 $t$ 의 함수를 넣으면 추측의 결론이 성립한다. 우변이 $n+1$ 인 것은 $t$ 자신이 하나 더 세어지기 때문이다.

## 실수 지수체의 결정 가능성

실수체에 지수함수를 더한 구조 $(\mathbb R,+,\cdot,\exp)$ 에서, 1 계 문장의 참거짓을 판정하는 알고리즘이 있는지를 묻는 것이 Tarski 의 지수함수 문제(Tarski's exponential function problem)다. A. Macintyre 와 A. Wilkie 는 Schanuel 추측의 실수판이 참이면 이 판정 알고리즘이 존재한다는 것을 증명했다[^4]. 증명은 이 구조의 모형 완비성(model completeness)에 대한 Wilkie 의 정리를 쓰고, 같은 정리에서 이 구조가 [o-최소성](o-minimality.md)을 갖는다는 것이 나온다.

# 활용

- [초월수](transcendental-numbers.md)의 결과를 하나의 진술로 모은다. Hermite–Lindemann 정리와 Lindemann–Weierstrass 정리는 증명된 경우이고, Gelfond–Schneider 정리와 Baker 정리의 결론은 추측의 따름이다.
- [Zilber–Pink 추측](zilber-pink-conjecture.md)과 지수함수의 모형론. B. Zilber 는 추측의 결론을 공리로 넣은 의사지수체(pseudo-exponential field)를 구성했고, 그 공리계가 복소 지수함수를 기술하는지 판정하는 데 추측이 쓰인다[^5].
- 실수 지수체의 1 계 이론. 성질 절의 결정 가능성 정리가 추측을 가정으로 쓴다.

[^1]: S. Lang, *Introduction to Transcendental Numbers*, Addison-Wesley, 1966, 3 장의 주석.
[^2]: A. Baker, *Transcendental Number Theory*, Cambridge University Press, 1975, 1 장.
[^3]: J. Ax, "On Schanuel's conjectures", *Annals of Mathematics* **93** (1971), 252–268.
[^4]: A. Macintyre, A. J. Wilkie, "On the decidability of the real exponential field", *Kreiseliana*, A K Peters, 1996, 441–467.
[^5]: B. Zilber, "Pseudo-exponentiation on algebraically closed fields of characteristic zero", *Annals of Pure and Applied Logic* **132** (2005), 67–95.

# 연관 문서

## 선수지식

- [초월수](transcendental-numbers.md)
- [초월차수](transcendence-degree.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #field_theory #logic
