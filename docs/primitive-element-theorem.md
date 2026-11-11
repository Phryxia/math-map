# 원시원소 정리

# 개요

**원시원소 정리(primitive element theorem)** 는 원소 여러 개를 넣어 만든 체의 확대가 알맞은 원소 하나만 넣어서도 만들어진다는 정리다. 유리수에 $\sqrt2$ 와 $\sqrt3$ 을 함께 넣어 만든 체는 두 수를 따로 다루어야 할 것처럼 보이지만, $\sqrt2+\sqrt3$ 하나만 넣어도 같은 체가 나온다. 이 정리로 확대를 원소 하나의 [최소다항식](minimal-polynomial.md) 하나로 적고, 확대에 대한 물음을 그 다항식의 근에 대한 물음으로 바꾼다.

# 직관

$\gamma=\sqrt2+\sqrt3$ 이라 한다. $\gamma$ 는 $\mathbb Q(\sqrt2,\sqrt3)$ 에 들어 있으므로 $\mathbb Q(\gamma)$ 는 $\mathbb Q(\sqrt2,\sqrt3)$ 에 포함된다. 거꾸로 $\sqrt2$ 와 $\sqrt3$ 이 $\gamma$ 의 유리수 계수 다항식으로 적히는지 본다. $\gamma$ 를 세제곱하면 다음이 나온다.

$$
\gamma^3=2\sqrt2+6\sqrt3+9\sqrt2+3\sqrt3=11\sqrt2+9\sqrt3
$$

$\gamma^3$ 에서 $9\gamma$ 를 빼면 $\sqrt3$ 이 사라지고, $11\gamma$ 에서 $\gamma^3$ 을 빼면 $\sqrt2$ 가 사라진다.

$$
\sqrt2=\frac{\gamma^3-9\gamma}{2},\qquad \sqrt3=\frac{11\gamma-\gamma^3}{2}
$$

그래서 $\sqrt2$ 와 $\sqrt3$ 이 $\mathbb Q(\gamma)$ 에 들어 있고 $\mathbb Q(\gamma)=\mathbb Q(\sqrt2,\sqrt3)$ 이다.

이 계산이 된 것은 $\sqrt2$ 와 $\sqrt3$ 의 계수 $11$ 과 $9$ 가 달라서다. $\gamma=\sqrt2+0\cdot\sqrt3$ 으로 고르면 $\gamma^3=2\gamma$ 가 되어 $\sqrt3$ 이 나오지 않는다. $\sqrt2$ 와 $\sqrt3$ 의 부호를 바꾼 네 수 $\pm\sqrt2\pm\sqrt3$ 이 서로 다르면 $\gamma$ 하나로 두 수를 가려낼 수 있고, $c\ne0$ 인 유리수 $c$ 에 대해 $\sqrt2+c\sqrt3$ 이 모두 그렇다.

# 정의

## 단순 확대와 원시원소

[체의 확대](field-extensions.md) $K/k$ 에 대해 $K=k(\gamma)$ 인 원소 $\gamma\in K$ 가 있으면 $K/k$ 를 **단순 확대(simple extension)** 라 하고, 그 $\gamma$ 를 $K/k$ 의 **원시원소(primitive element)** 라 한다. 직관 절의 $\sqrt2+\sqrt3$ 은 $\mathbb Q(\sqrt2,\sqrt3)/\mathbb Q$ 의 원시원소이고, 그 최소다항식은 $x^4-10x^2+1$ 이다. $\sqrt2$ 는 이 확대의 원시원소가 아니다. $\mathbb Q(\sqrt2)$ 의 차수가 $2$ 이기 때문이다.

## 분리 확대

최소다항식이 분해체에서 중근을 갖지 않는 대수적 원소를 분리원소(separable element)라 하고, 모든 원소가 분리원소인 대수적 확대를 [분리 확대](separable-extensions.md)라 한다. $\mathbb Q$ 위의 대수적 확대는 모두 분리 확대다. 표수 $p$ 의 체 $\mathbb F\_p(t)$ 위에서는 $x^p-t$ 가 기약이지만 분해체에서 $(x-t^{1/p})^p$ 로 쪼개져 중근을 가지므로 $t^{1/p}$ 는 분리원소가 아니다.

## 정리의 진술

$K/k$ 가 유한 분리 확대이면 $K/k$ 는 단순 확대다[^1]. 표수 $0$ 의 체와 유한체 위에서는 모든 유한 확대가 분리 확대이므로, 그 위의 유한 확대는 모두 단순 확대다.

# 성질

## 무한체에서의 증명

$K=k(\alpha,\beta)$ 이고 $\beta$ 가 분리원소인 경우를 보이면 생성원 수에 대한 귀납으로 정리가 나온다. $\alpha$ 와 $\beta$ 의 최소다항식을 $f$ 와 $g$ 라 하고, 분해체에서 $f$ 의 근을 $\alpha=\alpha_1,\dots,\alpha_r$, $g$ 의 근을 $\beta=\beta_1,\dots,\beta_s$ 라 한다. $\beta$ 가 분리원소이므로 $\beta_j$ 는 서로 다르다.

$j\ne1$ 에 대해 $\alpha_i+c\beta_j=\alpha+c\beta$ 가 되는 $c$ 는 많아야 $r(s-1)$ 개다. $k$ 가 무한체이므로 이 값들을 피하는 $c\in k$ 를 고르고 $\gamma=\alpha+c\beta$ 라 한다.

다항식 $h(x)=f(\gamma-cx)$ 는 $k(\gamma)$ 위의 다항식이고 $h(\beta)=f(\alpha)=0$ 이다. $h(\beta_j)=0$ 이면 $\gamma-c\beta_j$ 가 어떤 $\alpha_i$ 이므로 $c$ 의 선택에서 $j=1$ 이다. 그래서 $g$ 와 $h$ 의 공통근은 $\beta$ 하나이고, $g$ 에 중근이 없으므로 둘의 최대공약수는 $x-\beta$ 다.

최대공약수는 [유클리드 알고리즘](euclidean-algorithm.md)으로 계수의 사칙연산만 써서 구하므로 $k(\gamma)$ 위의 다항식이다. 그래서 $\beta\in k(\gamma)$ 이고, $\alpha=\gamma-c\beta\in k(\gamma)$ 이다. 곧 $k(\alpha,\beta)=k(\gamma)$ 다.

## 유한체의 경우

$k$ 가 유한체이면 $K$ 도 유한체다. [유한체](finite-fields.md)의 곱셈군 $K^\times$ 는 순환군이므로 그 생성원 $\gamma$ 의 거듭제곱이 $0$ 이 아닌 원소를 모두 지나고, $K=k(\gamma)$ 다. 무한체의 증명이 쓴 $c$ 의 선택은 여기서 필요하지 않다.

## 중간체에 의한 판정

**Steinitz 의 원시원소 판정(Steinitz's primitive element criterion)** 은 유한 확대 $K/k$ 가 단순 확대인 것과 $K$ 와 $k$ 사이의 중간체가 유한개인 것이 동치라는 정리다[^2]. 단순 확대 $k(\gamma)$ 의 중간체 $L$ 은 $\gamma$ 의 $L$ 위 최소다항식의 계수로 생성되고, 그 최소다항식은 $\gamma$ 의 $k$ 위 최소다항식의 일계수 인수이므로 중간체는 유한개다.

유한 분리 확대는 Galois 폐포(Galois closure) 안에 들어가고, [Galois 이론](galois-theory.md)의 대응으로 중간체가 유한군의 부분군과 짝지어진다. 그래서 중간체가 유한개이고, 원시원소 정리의 다른 증명이 된다. $\mathbb Q(\sqrt2,\sqrt3)$ 의 Galois 군은 $\sqrt2$ 와 $\sqrt3$ 의 부호를 따로 바꾸는 위수 $4$ 의 군이고, 진부분군 셋에 대응하는 중간체는 $\mathbb Q(\sqrt2)$, $\mathbb Q(\sqrt3)$, $\mathbb Q(\sqrt6)$ 이다.

## 비분리 확대의 반례

$k=\mathbb F\_p(s,t)$ 를 두 변수 유리함수체라 하고 $K=k(s^{1/p},t^{1/p})$ 라 한다. $K/k$ 의 차수는 $p^2$ 이다. 표수 $p$ 에서 $(a+b)^p=a^p+b^p$ 이므로 $K$ 의 모든 원소 $\gamma$ 에 대해 $\gamma^p\in k$ 이고, $\gamma$ 는 $x^p-\gamma^p$ 의 근이라 $\lbrack k(\gamma):k\rbrack\le p$ 다. 그래서 $K/k$ 는 단순 확대가 아니다.

Steinitz 의 판정과 맞추어 보면 이 확대의 중간체는 무한개다. $a\in k$ 마다 $k(s^{1/p}+a\thinspace t^{1/p})$ 가 차수 $p$ 의 중간체이고, $a$ 가 다르면 이 중간체도 다르다.

# 활용

- [Galois 이론](galois-theory.md). 유한 Galois 확대 $K=k(\gamma)$ 의 자기동형은 $\gamma$ 를 그 최소다항식의 근으로 보내는 것으로 정해지므로, Galois 군의 위수가 최소다항식의 차수, 곧 $\lbrack K:k\rbrack$ 와 같다.
- [대수적 수체](algebraic-number-fields.md). 모든 대수적 수체는 $\mathbb Q(\theta)$ 꼴이다. 차수 $n$ 인 수체를 $\mathbb C$ 에 넣는 방법이 $\theta$ 를 그 켤레 $n$ 개 가운데 하나로 보내는 $n$ 가지이고, 판별식과 노름을 이 넣기로 정의한다.
- [실폐체](real-closed-fields.md). 대수학의 기본정리의 대수적 증명에서, 홀수 차수 확대의 원시원소를 잡아 그 최소다항식이 실근을 갖는다는 것으로 확대가 자명함을 보인다.
- 최소다항식의 계산. 여러 원소로 생성된 확대의 차수를 원시원소 하나의 최소다항식 차수로 구한다. $\mathbb Q(\sqrt2,\sqrt3)$ 의 차수 $4$ 는 $\sqrt2+\sqrt3$ 의 최소다항식 $x^4-10x^2+1$ 의 차수다.

[^1]: S. Lang, *Algebra*, 3rd ed., Springer GTM 211, Chapter V §4, Theorem 4.6.
[^2]: E. Steinitz, "Algebraische Theorie der Körper", J. reine angew. Math. 137 (1910), 167–309. 현대적 서술은 Lang, 같은 책, Chapter V §4, Theorem 4.6 의 증명.

# 연관 문서

## 선수지식

- [체의 확대](field-extensions.md)
- [분리 확대](separable-extensions.md)

## 더 알아보기

아직 연결한 문서가 없다.

#field_theory #algebra #number_theory
