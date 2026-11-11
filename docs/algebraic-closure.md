# 대수적 폐포

# 개요

**대수적 폐포(algebraic closure)** 는 체에 다항식의 근을 모두 넣어 더 넣을 근이 남지 않게 만든 가장 작은 확대다. 유리수 계수 다항식 $x^2-2$, $x^3-2$, $x^5-x-1$ 의 근을 하나씩 넣어 체를 키우면 새 다항식이 계속 나와 끝나지 않는다. 대수적 폐포는 이 근들을 한꺼번에 담는 체 하나를 정해, 서로 다른 다항식의 근을 같은 체 안에서 더하고 곱하게 한다.

# 직관

$\sqrt2$ 와 $\sqrt3$ 을 함께 다루려면 $\mathbb Q(\sqrt2)$ 에 $\sqrt3$ 을 넣은 $\mathbb Q(\sqrt2,\sqrt3)$ 을 만든다. 여기에 $\sqrt[3]{2}$ 가 필요해지면 체를 또 키운다. 다항식이 하나 늘 때마다 체를 다시 만들어야 한다.

[복소수](complex-numbers.md)에서는 상수가 아닌 모든 다항식이 근을 갖는다. 그래서 위의 근들을 모두 복소수로 보면 체를 다시 만들 필요가 없다. 그런데 복소수에는 $\pi$ 처럼 어느 유리수 계수 다항식의 근도 아닌 수가 들어 있다. 유리수 계수 다항식의 근이 되는 복소수만 모으면 다음 집합이 된다.

$$
\overline{\mathbb Q}=\lbrace z\in\mathbb C : f(z)=0 \text{ for some } f\in\mathbb Q\lbrack x\rbrack,\ f\ne 0\rbrace
$$

이 집합에서 덧셈과 곱셈을 할 수 있는지 본다. $\sqrt2+\sqrt3$ 은 $x^4-10x^2+1$ 의 근이므로 $\overline{\mathbb Q}$ 에 들어 있다. 일반적인 $\alpha,\beta\in\overline{\mathbb Q}$ 에 대해서는 $\mathbb Q(\alpha,\beta)$ 가 $\mathbb Q$ 위의 유한 차원 벡터 공간이므로, $\alpha+\beta$ 의 거듭제곱 $1,\alpha+\beta,(\alpha+\beta)^2,\dots$ 가 어디선가 일차종속이 되고 그 관계식이 $\alpha+\beta$ 를 근으로 갖는 다항식이다. 곱과 역수도 같다.

$\overline{\mathbb Q}$ 계수 다항식의 근도 $\overline{\mathbb Q}$ 에 있다. $x^2-\sqrt2$ 의 근 $\sqrt[4]{2}$ 는 $x^4-2$ 의 근이므로 $\overline{\mathbb Q}$ 에 들어 있다. 유한체 $\mathbb F_2$ 는 복소수 안에 들어 있지 않아서 이 방법이 막힌다. $\mathbb F_2$ 위의 $x^2+x+1$ 의 근을 담는 체는 복소수 밖에서 만들어야 한다.

# 정의

## 대수적으로 닫힌 체

체 $\Omega$ 위의 상수가 아닌 모든 다항식이 $\Omega$ 에 근을 가지면 $\Omega$ 를 **대수적으로 닫힌 체(algebraically closed field)** 라 한다. 나눗셈 정리를 되풀이하면 이 조건은 모든 다항식이 $\Omega$ 위에서 일차식의 곱으로 쪼개진다는 것과 같다.

$\mathbb C$ 는 대수학의 기본정리(fundamental theorem of algebra)로 대수적으로 닫힌 체다. $\mathbb R$ 은 $x^2+1$ 의 근이 없으므로 대수적으로 닫혀 있지 않고, $\mathbb Q$ 는 $x^2-2$ 의 근이 없으므로 대수적으로 닫혀 있지 않다.

## 대수적 폐포

[체의 확대](field-extensions.md) $\overline K/K$ 가 대수적 확대이고 $\overline K$ 가 대수적으로 닫힌 체이면 $\overline K$ 를 $K$ 의 **대수적 폐포(algebraic closure)** 라 한다.

직관 절의 $\overline{\mathbb Q}$ 는 $\mathbb Q$ 의 대수적 폐포다. $\mathbb C$ 는 $\mathbb R$ 의 대수적 폐포이고 $[\mathbb C:\mathbb R]=2$ 다. $\pi$ 는 $\mathbb Q$ 위에서 대수적이지 않으므로 $\mathbb C/\mathbb Q$ 는 대수적 확대가 아니고, $\mathbb C$ 는 $\mathbb Q$ 의 대수적 폐포가 아니다.

# 성질

## 대수적 원소의 체

대수적으로 닫힌 체 $\Omega$ 와 그 부분체 $K$ 에 대해, $K$ 위에서 대수적인 $\Omega$ 의 원소 전체는 $K$ 의 대수적 폐포다.

증명의 요지. 직관 절의 계산대로 $K(\alpha,\beta)$ 가 $K$ 위의 유한 확대이므로 합, 곱, 역수가 대수적이다. 이 체의 원소 계수 다항식의 근 $\gamma$ 는 계수들이 생성하는 유한 확대 위에서 대수적이고, 탑 법칙(tower law)으로 $K$ 위에서도 대수적이다.

$\mathbb Q$ 위의 다항식은 셀 수 있는 개수이고 각각의 근은 유한 개이므로 $\overline{\mathbb Q}$ 는 셀 수 있는 집합이다. $\mathbb C$ 는 셀 수 없으므로 $\mathbb Q$ 위에서 대수적이지 않은 복소수, 곧 [초월수](transcendental-numbers.md)가 존재한다.

## 존재

모든 체는 대수적 폐포를 갖는다. Steinitz 가 1910 년에 증명했다[^1]. 다음 증명은 Artin 의 것이고 [선택공리](axiom-of-choice.md)와 동치인 Zorn 보조정리를 쓴다.

증명의 요지. $K$ 위의 상수가 아닌 일계수 다항식 $f$ 마다 변수 $x_f$ 를 하나씩 두고, 이 변수들의 다항식환 $R$ 에서 $f(x_f)$ 들이 생성하는 아이디얼 $I$ 를 잡는다. $I=R$ 이면 $1$ 이 유한 개의 $f_i(x_{f_i})$ 의 결합으로 적히는데, $f_1,\dots,f_n$ 의 근을 모두 담는 유한 확대에서 $x_{f_i}$ 에 근을 넣으면 $1=0$ 이 되어 모순이다.

Zorn 보조정리로 $I$ 를 포함하는 극대 아이디얼 $\mathfrak m$ 을 잡으면 $K_1=R/\mathfrak m$ 은 $K$ 위의 모든 다항식이 근을 갖는 확대다. 같은 구성을 되풀이한 $K\subset K_1\subset K_2\subset\cdots$ 의 합집합은 대수적으로 닫힌 체이고, 앞 절의 정리로 그 안에서 $K$ 위에서 대수적인 원소들이 $K$ 의 대수적 폐포가 된다.

## 유일성

$K$ 의 두 대수적 폐포 $\overline K$ 와 $\overline K'$ 사이에는 $K$ 의 원소를 고정하는 체 동형이 존재한다[^1].

증명의 요지. $L/K$ 가 대수적 확대이고 $\Omega$ 가 대수적으로 닫힌 체이면 $K\to\Omega$ 인 체 준동형이 $L\to\Omega$ 로 확장된다. 원소 하나씩은 최소다항식의 근으로 보내 확장하고, 확장의 쌍을 순서 짓고 Zorn 보조정리로 극대인 것을 잡는다. $\overline K\to\overline K'$ 의 상은 대수적으로 닫혀 있고 $\overline K'$ 은 그 위에서 대수적이므로 상이 $\overline K'$ 전체다.

이 동형은 하나로 정해지지 않는다. $\overline{\mathbb Q}$ 에서 복소켤레 $z\mapsto\bar z$ 는 $\mathbb Q$ 를 고정하는 항등이 아닌 동형이다. 이 자기동형들이 이루는 군이 절대 Galois 군(absolute Galois group) $\mathrm{Gal}(\overline{\mathbb Q}/\mathbb Q)$ 다.

## 유한체의 대수적 폐포

[유한체](finite-fields.md)에서 $\mathbb F_{p^m}\subset\mathbb F_{p^n}$ 인 것은 $m$ 이 $n$ 을 나누는 것과 동치다. 그래서 다음 사슬의 합집합이 $\mathbb F_p$ 의 대수적 폐포다.

$$
\mathbb F_p\subset\mathbb F_{p^{2}}\subset\mathbb F_{p^{6}}\subset\mathbb F_{p^{24}}\subset\cdots\subset\mathbb F_{p^{n!}}\subset\cdots
$$

$\mathbb F_p$ 위의 차수 $d$ 인 기약다항식의 근은 $\mathbb F_{p^d}$ 에 있고, $n\ge d$ 이면 $\mathbb F_{p^{n!}}$ 에 들어 있다. 직관 절의 $x^2+x+1$ 의 근은 $\mathbb F_4$ 에 있다. 유한체는 대수적으로 닫혀 있지 않다. $\mathbb F_q$ 의 원소를 $a_1,\dots,a_q$ 라 하면 $(x-a_1)\cdots(x-a_q)+1$ 은 $\mathbb F_q$ 에 근이 없다.

# 활용

- [고윳값](eigenvalues.md)과 [Jordan 표준형](jordan-canonical-form.md). 특성다항식이 일차식으로 쪼개져야 모든 정사각행렬이 고윳값을 갖고 Jordan 표준형으로 바뀐다. 실수 행렬은 $\mathbb C$ 로 옮겨 다룬다.
- [Hilbert 영점 정리](hilbert-nullstellensatz.md). 대수적으로 닫힌 체 위에서 다항식계가 해를 갖지 않는 것은 그 다항식들이 생성하는 아이디얼이 $1$ 을 포함하는 것과 동치다. $\mathbb R$ 위의 $x^2+1$ 처럼 닫혀 있지 않은 체에서는 이 동치가 깨진다.
- [Galois 이론](galois-theory.md)의 분해체와 [Galois 표현](galois-representations.md). 분해체를 대수적 폐포 안의 부분체로 잡으면 서로 다른 확대를 한 체 안에서 비교하고, 절대 Galois 군이 $\mathbb Q$ 의 모든 유한 Galois 확대의 군을 한 번에 담는다.
- [초월차수](transcendence-degree.md). 대수적으로 닫힌 체는 표수와 초월차수로 동형류가 정해진다.

[^1]: E. Steinitz, "Algebraische Theorie der Körper", Journal für die reine und angewandte Mathematik 137 (1910) 167–309 — 대수적 폐포의 존재와 유일성. Artin 의 아이디얼 구성은 S. Lang, Algebra, revised 3rd ed., Springer, Graduate Texts in Mathematics 211 (2002), Chapter V §2 를 따른다.

# 연관 문서

## 선수지식

- [체의 확대](field-extensions.md)
- [선택공리](axiom-of-choice.md)

## 더 알아보기

아직 연결한 문서가 없다.

#field_theory #algebra #set_theory
