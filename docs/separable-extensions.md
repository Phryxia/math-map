# 분리 확대

# 개요

**분리 확대(separable extension)** 는 확대의 원소마다 그 최소다항식의 근이 서로 겹치지 않는 체의 확대다. 표수 $2$ 의 유리함수체 $\mathbb F\_2(t)$ 에 $t$ 의 제곱근 $u$ 를 넣으면 $x^2-t$ 는 $(x-u)^2$ 로 쪼개져 두 근이 하나로 겹친다. 이런 확대에서는 차수와 근의 개수가 어긋나므로, 분리 확대라는 조건으로 근의 개수로 확대를 세는 논증이 성립하는 확대를 가려낸다.

# 직관

$\mathbb Q(\sqrt[3]2)$ 를 [복소수](complex-numbers.md) 안에 넣는 방법을 센다. $\sqrt[3]2$ 를 보낼 곳은 $x^3-2$ 의 근이어야 하고, 복소수 안에 그 근이 $\sqrt[3]2,\ \omega\sqrt[3]2,\ \omega^2\sqrt[3]2$ 셋 있다($\omega$ 는 $1$ 의 원시 세제곱근). 그래서 넣는 방법이 셋이고, 확대의 차수 $3$ 과 같다.

$k=\mathbb F\_2(t)$ 와 $K=k(u)$, $u^2=t$ 에서 같은 일을 한다. $u$ 를 보낼 곳은 $x^2-t$ 의 근인데, 표수 $2$ 에서 $2u=0$ 이므로 다음이 성립한다.

$$
(x-u)^2=x^2-2ux+u^2=x^2+t=x^2-t
$$

근이 $u$ 하나뿐이므로 넣는 방법은 하나이고, 차수 $2$ 보다 작다. 근이 겹치면 넣는 방법의 수가 차수보다 작아진다.

# 정의

## 분리다항식과 분리원소

체 $k$ 위의 다항식이 분해체에서 서로 다른 근만 가지면 **분리다항식(separable polynomial)** 이라 한다. 대수적 원소의 [최소다항식](minimal-polynomial.md)이 분리다항식이면 그 원소를 **분리원소(separable element)** 라 하고, 모든 원소가 분리원소인 대수적 [체의 확대](field-extensions.md)를 분리 확대라 한다.

$x^3-2$ 는 $\mathbb Q$ 위의 분리다항식이고, $\mathbb Q(\sqrt[3]2)/\mathbb Q$ 는 분리 확대다. 직관 절의 $x^2-t$ 는 $\mathbb F\_2(t)$ 위에서 기약이지만 분리다항식이 아니므로 $u$ 는 분리원소가 아니고 $K/k$ 는 분리 확대가 아니다.

## 분리 차수

$\bar k$ 를 $k$ 의 [대수적 폐포](algebraic-closure.md)라 한다. 유한 확대 $K/k$ 의 **분리 차수(separable degree)** $\lbrack K:k\rbrack\_s$ 는 $k$ 의 원소를 고정하는 체 준동형 $K\to\bar k$ 의 개수다. 직관 절에서 $\lbrack\mathbb Q(\sqrt[3]2):\mathbb Q\rbrack\_s=3$ 이고 $\lbrack K:k\rbrack\_s=1$ 이다.

## 완전체

모든 대수적 확대가 분리 확대인 체를 **완전체(perfect field)** 라 한다. $\mathbb Q$ 는 완전체이고, $\mathbb F\_2(t)$ 는 직관 절의 확대 때문에 완전체가 아니다.

# 성질

## 도함수 판정

다항식 $f$ 가 중근을 갖는 것과 $f$ 와 도함수 $f'$ 이 공통근을 갖는 것은 동치다. $f=(x-a)^2g$ 이면 $f'=(x-a)(2g+(x-a)g')$ 이기 때문이다. 공통근의 존재는 $\gcd(f,f')\ne1$ 과 동치이고, 최대공약수는 $k$ 안에서 계산되므로 분해체를 만들지 않고 판정할 수 있다.

$f$ 가 기약이면 더 줄어든다. $f'\ne0$ 이면 $\gcd(f,f')$ 는 $f$ 를 나누면서 차수가 $f$ 보다 작으므로 $1$ 이고, $f$ 는 분리다항식이다. 그래서 기약다항식 $f$ 가 분리다항식이 아닌 것은 $f'=0$ 과 동치다.

표수 $0$ 에서 $f'=0$ 은 $f$ 가 상수일 때뿐이므로 표수 $0$ 의 체는 완전체다. 표수 $p$ 에서 $f'=0$ 은 $f(x)=g(x^p)$ 꼴과 동치다. 직관 절의 $x^2-t$ 는 $p=2$, $g(y)=y-t$ 인 경우다.

## Frobenius 사상과 완전체

표수 $p$ 의 체 $k$ 에서 $(a+b)^p=a^p+b^p$ 이므로 $a\mapsto a^p$ 는 체 준동형이고, 이것을 **Frobenius 사상(Frobenius map)** 이라 한다. 표수 $p$ 의 체 $k$ 가 완전체인 것과 Frobenius 사상이 전사인 것, 곧 모든 원소가 $p$ 제곱인 것은 동치다[^1].

[유한체](finite-fields.md)에서 Frobenius 사상은 단사이고 원소가 유한개이므로 전사다. 그래서 유한체는 완전체다. $\mathbb F\_p(t)$ 에서 $t$ 는 $p$ 제곱이 아니므로 $\mathbb F\_p(t)$ 는 완전체가 아니다.

## 분리 차수와 차수

유한 확대 $K/k$ 에 대해 다음이 성립한다[^2].

$$
\lbrack K:k\rbrack\_s\le\lbrack K:k\rbrack,\qquad \lbrack K:k\rbrack\_s=\lbrack K:k\rbrack \iff K/k \text{ 가 분리 확대}
$$

단순 확대 $k(\alpha)$ 에서는 $\lbrack k(\alpha):k\rbrack\_s$ 가 $\alpha$ 의 최소다항식의 서로 다른 근의 개수이므로 위 식이 바로 나온다. 분리 차수는 차수처럼 확대의 탑에서 곱셈적이고, 이것으로 일반 유한 확대의 경우가 단순 확대의 경우로 줄어든다. 따름정리로 $L/K$ 와 $K/k$ 가 분리 확대이면 $L/k$ 도 분리 확대이고, 분리원소로 생성된 확대는 분리 확대다.

## 순비분리 확대

표수 $p$ 에서 모든 원소 $\alpha\in K$ 에 대해 어떤 $e\ge0$ 이 있어 $\alpha^{p^e}\in k$ 이면 $K/k$ 를 **순비분리 확대(purely inseparable extension)** 라 한다. 직관 절의 $K/k$ 는 $u^2=t\in k$ 이므로 순비분리 확대다.

유한 확대 $K/k$ 안에서 $k$ 위의 분리원소 전체는 중간체 $k_s$ 를 이루고, $k_s/k$ 는 분리 확대, $K/k_s$ 는 순비분리 확대다. $\lbrack K:k_s\rbrack$ 는 $p$ 의 거듭제곱이고 이것을 **비분리 차수(inseparable degree)** 라 한다. 직관 절의 확대에서는 $k_s=k$ 이고 비분리 차수는 $2$ 다.

## 대각합 판정

유한 확대 $K/k$ 의 원소 $a$ 에 대해 $x\mapsto ax$ 를 $k$ 위의 [선형사상](linear-maps.md)으로 보고 그 대각합을 $\mathrm{Tr}\_{K/k}(a)$ 라 한다. $K/k$ 가 분리 확대인 것과 쌍선형형식 $(a,b)\mapsto\mathrm{Tr}\_{K/k}(ab)$ 가 비퇴화인 것은 동치다[^3].

직관 절의 확대에서 기저 $1,u$ 에 대해 곱셈 [행렬](matrices.md)을 쓰면 $\mathrm{Tr}(1)=2=0$ 이고 $\mathrm{Tr}(u)=0$ 이다. 대각합이 $K$ 전체에서 $0$ 이므로 이 형식은 퇴화이고, 분리 확대가 아니라는 것과 맞는다.

# 활용

- [원시원소 정리](primitive-element-theorem.md). 유한 분리 확대는 원소 하나로 생성된다. 증명에서 최대공약수가 $x-\beta$ 하나로 줄어드는 단계가 $\beta$ 의 최소다항식에 중근이 없다는 것을 쓴다.
- [Galois 이론](galois-theory.md). 유한 확대 $K/k$ 가 Galois 확대인 것은 분리 확대이면서 [정규 확대](normal-extensions.md)인 것과 동치다. 이때 Galois 군의 위수가 분리 차수와 같고, 분리 차수가 차수와 같다는 것으로 $\vert\mathrm{Gal}(K/k)\vert=\lbrack K:k\rbrack$ 가 나온다.
- [대수적 수체](algebraic-number-fields.md). 표수 $0$ 이므로 모든 수체가 $\mathbb Q$ 위의 분리 확대이고, 대각합 형식의 [행렬식](determinants.md)으로 판별식을 정의할 수 있다.
- 표수 $p$ 의 대수기하. 함수체 $\mathbb F\_p(t)$ 는 완전체가 아니므로 Frobenius 사상에서 생기는 순비분리 확대를 따로 다룬다.

[^1]: S. Lang, *Algebra*, 3rd ed., Springer GTM 211, Chapter V §6. 완전체와 Frobenius 사상.
[^2]: Lang, 같은 책, Chapter V §4 와 §6. 분리 차수의 곱셈성과 분리 확대의 판정.
[^3]: Lang, 같은 책, Chapter VI §5. 대각합과 분리 확대.

# 연관 문서

## 선수지식

- [체의 확대](field-extensions.md)

## 더 알아보기

- [원시원소 정리](primitive-element-theorem.md)

#field_theory #algebra
