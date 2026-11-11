# 정규 확대

# 개요

**정규 확대(normal extension)** 는 기약다항식의 근을 하나라도 포함하면 그 다항식의 근을 모두 포함하는 체의 확대다. $\mathbb Q(\sqrt[3]2)$ 는 $x^3-2$ 의 실근 $\sqrt[3]2$ 를 포함하지만 나머지 두 복소근은 포함하지 않는다. 근이 빠진 확대에서는 근끼리 바꾸는 자기동형을 만들 수 없으므로, 정규 확대라는 조건으로 근이 모두 갖추어진 확대를 가려내고 자기동형으로 확대를 다룬다.

# 직관

$\mathbb Q(\sqrt2)$ 에서 $a+b\sqrt2\mapsto a-b\sqrt2$ 는 사칙연산을 보존하고 유리수를 고정한다. $x^2-2$ 의 두 근 $\sqrt2$ 와 $-\sqrt2$ 가 둘 다 $\mathbb Q(\sqrt2)$ 에 들어 있어서 하나를 다른 하나로 보낼 수 있다.

$\mathbb Q(\sqrt[3]2)$ 에서 같은 일을 하려면 $\sqrt[3]2$ 를 $x^3-2$ 의 다른 근으로 보내야 한다. 그 근은 $\omega\sqrt[3]2$ 와 $\omega^2\sqrt[3]2$ 이고($\omega$ 는 $1$ 의 원시 세제곱근), [실수](real-numbers.md)가 아니므로 실수만으로 된 $\mathbb Q(\sqrt[3]2)$ 에 없다. 그래서 유리수를 고정하는 $\mathbb Q(\sqrt[3]2)$ 의 자기동형은 항등사상 하나뿐이고, 차수 $3$ 에 비해 대칭이 모자란다.

$\omega$ 까지 넣은 $\mathbb Q(\sqrt[3]2,\omega)$ 에는 세 근이 모두 있다. 이 체의 자기동형은 $\sqrt[3]2$ 를 세 근 가운데 하나로, $\omega$ 를 $\omega$ 나 $\omega^2$ 로 보내는 $3\cdot2=6$ 개이고, 차수 $6$ 과 같다.

# 정의

## 정규 확대

대수적인 [체의 확대](field-extensions.md) $K/k$ 에서, $K$ 에 근을 하나라도 갖는 $k$ 위의 기약다항식이 모두 $K\lbrack x\rbrack$ 에서 일차식의 곱으로 쪼개지면 $K/k$ 를 정규 확대라 한다.

$\mathbb Q(\sqrt2)/\mathbb Q$ 와 $\mathbb Q(\sqrt[3]2,\omega)/\mathbb Q$ 는 정규 확대이고, $\mathbb Q(\sqrt[3]2)/\mathbb Q$ 는 $x^3-2$ 가 쪼개지지 않으므로 정규 확대가 아니다. 차수가 $2$ 인 확대는 항상 정규 확대다. $\beta\in K\setminus k$ 의 [최소다항식](minimal-polynomial.md) $x^2+bx+c$ 의 다른 근이 $-b-\beta\in K$ 이기 때문이다.

## 정규 폐포

$K/k$ 가 유한 확대일 때, $K$ 를 포함하고 $k$ 위에서 정규인 확대 가운데 가장 작은 것을 $K/k$ 의 **정규 폐포(normal closure)** 라 한다. $K=k(\alpha_1,\dots,\alpha_n)$ 이면 정규 폐포는 $\alpha_i$ 들의 최소다항식의 곱의 분해체다. $\mathbb Q(\sqrt[3]2)/\mathbb Q$ 의 정규 폐포는 $\mathbb Q(\sqrt[3]2,\omega)$ 이고 차수는 $6$ 이다.

# 성질

## 분해체 판정

유한 확대 $K/k$ 가 정규 확대인 것과 $K$ 가 $k$ 위의 어떤 다항식의 분해체인 것은 동치다[^1].

$K/k$ 가 정규이고 $K=k(\alpha_1,\dots,\alpha_n)$ 이면 $\alpha_i$ 의 최소다항식은 모두 $K$ 에서 쪼개지므로, $K$ 는 그 곱의 분해체다. 거꾸로 $K$ 가 $f$ 의 분해체이고 $\alpha\in K$ 의 최소다항식 $g$ 가 대수적 폐포(algebraic closure) $\bar k$ 안에 근 $\beta$ 를 가진다고 하자. $\alpha\mapsto\beta$ 인 $k(\alpha)\to\bar k$ 를 $K\to\bar k$ 로 늘리면, 이 사상은 $f$ 의 근을 $f$ 의 근으로 보내므로 상이 $K$ 이고, 그래서 $\beta\in K$ 다.

## 넣기에 의한 판정

유한 확대 $K/k$ 가 정규 확대인 것은 $k$ 를 고정하는 모든 체 준동형 $\sigma\colon K\to\bar k$ 에 대해 $\sigma(K)=K$ 인 것과 동치다. 이 판정에서 다음이 따라 나온다.

$$
\lvert\mathrm{Aut}(K/k)\rvert\le\lbrack K:k\rbrack\_s\le\lbrack K:k\rbrack
$$

$\lbrack K:k\rbrack\_s$ 는 $k$ 를 고정하는 $K\to\bar k$ 의 개수인 [분리 확대](separable-extensions.md)의 분리 차수다. 자기동형은 상이 $K$ 인 넣기이므로 첫째 등호는 $K/k$ 가 정규일 때 성립하고, 둘째 등호는 분리 확대일 때 성립한다. $\mathbb Q(\sqrt[3]2)/\mathbb Q$ 에서는 $1\lt3=3$ 이다.

## 탑과 정규성

$k\subseteq L\subseteq K$ 이고 $K/k$ 가 정규이면 $K/L$ 도 정규다. $L$ 위의 최소다항식은 $k$ 위의 최소다항식을 나누기 때문이다. $L/k$ 는 정규가 아닐 수 있다. $\mathbb Q(\sqrt[3]2)$ 는 정규 확대 $\mathbb Q(\sqrt[3]2,\omega)/\mathbb Q$ 의 중간체이지만 $\mathbb Q$ 위에서 정규가 아니다.

정규 확대를 두 번 쌓은 것도 정규가 아닐 수 있다. 다음 탑에서 두 층은 차수가 $2$ 라서 정규다.

$$
\mathbb Q\subseteq\mathbb Q(\sqrt2)\subseteq\mathbb Q(\sqrt[4]2)
$$

그러나 $x^4-2$ 의 근 $i\sqrt[4]2$ 는 실수가 아니어서 $\mathbb Q(\sqrt[4]2)$ 에 없으므로, $\mathbb Q(\sqrt[4]2)/\mathbb Q$ 는 정규가 아니다.

## 유한체의 확대

[유한체](finite-fields.md) $\mathbb F\_q$ 의 유한 확대 $\mathbb F\_{q^n}$ 은 $x^{q^n}-x$ 의 분해체이므로 정규 확대다. 그래서 유한체의 유한 확대는 모두 정규이고, 유한체가 완전체이므로 모두 Galois 확대다.

# 활용

- [Galois 이론](galois-theory.md). 유한 확대가 Galois 확대인 것은 정규 확대이면서 분리 확대인 것과 동치다. 위의 부등식에서 두 등호가 함께 성립하는 경우이고, 이때 $\lvert\mathrm{Gal}(K/k)\rvert=\lbrack K:k\rbrack$ 다.
- Galois 대응의 정규부분군. $K/k$ 가 유한 Galois 확대이고 $L$ 이 중간체이면, $L/k$ 가 정규인 것과 $\mathrm{Gal}(K/L)$ 이 $\mathrm{Gal}(K/k)$ 의 정규부분군(normal subgroup)인 것이 동치다. 이때 $\mathrm{Gal}(L/k)$ 는 몫군 $\mathrm{Gal}(K/k)/\mathrm{Gal}(K/L)$ 과 동형이다. 이 대응이 방정식의 가해성을 군의 가해성으로 옮기는 데 쓰인다.
- 정규 폐포의 계산. 정규가 아닌 확대 $\mathbb Q(\sqrt[3]2)$ 를 다룰 때는 정규 폐포 $\mathbb Q(\sqrt[3]2,\omega)$ 로 옮겨 Galois 군 $S_3$ 의 부분군으로 중간체를 센다.

[^1]: S. Lang, *Algebra*, 3rd ed., Springer GTM 211, Chapter V §3, Theorem 3.3.

# 연관 문서

## 선수지식

- [체의 확대](field-extensions.md)

## 더 알아보기

아직 연결한 문서가 없다.

#field_theory #algebra
