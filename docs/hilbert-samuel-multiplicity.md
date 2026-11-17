# Hilbert–Samuel 중복도

# 개요

**Hilbert–Samuel 중복도(Hilbert–Samuel multiplicity)** 는 곡선이나 곡면이 한 점에서 얼마나 겹쳐 있는지를 그 점 근처의 다항식을 세어 정하는 정수다. 곡선 $y=x^3$ 은 원점을 한 번 매끄럽게 지나지만, 뾰족점이 있는 곡선 $y^2=x^3$ 은 원점에서 두 가지가 맞붙어 있고 원점을 지나는 직선은 대부분 이 곡선과 원점에서 두 번 만난다. 이 중복도는 원점에서 $n$ 차 미만의 항만 남긴 다항식의 개수가 $n$ 에 따라 얼마나 빨리 느는지 재어, 매끄러운 곡선에 $1$, 뾰족점에 $2$ 를 준다.

# 직관

원점 근처만 보려고 $x,y$ 의 차수가 $n$ 이상인 항을 모두 $0$ 으로 둔다. 남는 것은 차수가 $n$ 미만인 단항식들이고, 차수가 $j$ 인 단항식이 $j+1$ 개이므로 그 개수는 $n(n+1)/2$ 다.

곡선 $f=y^2-x^3=0$ 위에서는 $f$ 의 배수도 $0$ 이다. $f$ 의 가장 낮은 차수의 항 $y^2$ 이 차수 $2$ 이므로, $f$ 에 차수 $n-2$ 미만의 단항식을 곱한 $(n-2)(n-1)/2$ 개가 차수 $n$ 미만에서 새로 $0$ 이 된다. 남는 개수는 다음과 같다.

$$
\frac{n(n+1)}{2}-\frac{(n-1)(n-2)}{2}=2n-1
$$

같은 계산을 매끄러운 곡선 $y-x^3=0$ 에 하면 가장 낮은 항 $y$ 의 차수가 $1$ 이어서 $n(n+1)/2-(n-1)n/2=n$ 이 남는다. 두 곡선 모두 남는 개수가 $n$ 의 일차식이고, 곡선이 $1$ 차원이라는 것이 이 차수에 나타난다. 일차항의 계수 $2$ 와 $1$ 이 원점에서 곡선이 겹친 정도다.

# 정의

## 길이

환 $R$ 위의 가군 $M$ 이 부분가군의 사슬 $0=M\_0\subsetneq M\_1\subsetneq\cdots\subsetneq M\_\ell=M$ 을 갖고 각 몫 $M\_i/M\_{i-1}$ 이 0 이 아닌 진부분가군을 갖지 않으면, 이 사슬의 길이 $\ell$ 은 사슬의 선택과 무관하다. 이 수를 $M$ 의 **길이(length)** $\ell\_R(M)$ 이라 한다. 잉여체 $k$ 를 포함하는 국소환에서 $R/\mathfrak m^n$ 의 길이는 $k$ 위의 벡터 공간 차원과 같다.

## Hilbert–Samuel 함수와 중복도

$(R,\mathfrak m)$ 을 Noether 국소환, $d=\dim R$ 을 [Krull 차원](krull-dimension.md), $\mathfrak q$ 를 $\mathfrak m$-준소 아이디얼($\mathfrak m^r\subseteq\mathfrak q\subseteq\mathfrak m$ 인 $r$ 이 있는 아이디얼)이라 하자. $\mathfrak q$ 의 **Hilbert–Samuel 함수(Hilbert–Samuel function)** 는 $\chi\_{\mathfrak q}(n)=\ell\_R(R/\mathfrak q^n)$ 이다. 아래 성질 절의 정리로 큰 $n$ 에서 이 함수는 $d$ 차 다항식이고, 최고차 항을 다음과 같이 쓸 때 $e(\mathfrak q)$ 를 $\mathfrak q$ 의 **중복도(multiplicity)** 라 한다.

$$
\chi\_{\mathfrak q}(n)=\frac{e(\mathfrak q)}{d!}n^d+O(n^{d-1})
$$

$e(R)=e(\mathfrak m)$ 을 $R$ 의 중복도라 한다. 직관 절의 뾰족점은 $R=k\lbrack x,y\rbrack\_{(x,y)}/(y^2-x^3)$, $\mathfrak q=\mathfrak m$ 인 경우이고, $\chi\_{\mathfrak m}(n)=2n-1$, $d=1$, $e(R)=2$ 다.

# 성질

## Hilbert–Samuel 다항식의 차수

정리. $\chi\_{\mathfrak q}(n)$ 은 충분히 큰 $n$ 에서 $\mathbb Q$ 계수 다항식과 같고, 그 차수는 $\mathfrak q$ 에 무관하게 $\dim R$ 이다[^1].

증명의 요지. 차수 붙은 환 $\bigoplus\_n\mathfrak q^n/\mathfrak q^{n+1}$ 은 $\mathfrak q$ 의 생성원으로 만든 다항식환의 몫이므로, [Hilbert 함수](hilbert-functions.md)의 정리로 $\ell(\mathfrak q^n/\mathfrak q^{n+1})$ 이 큰 $n$ 에서 다항식이다. 이것을 $n$ 에 대해 더하면 $\chi\_{\mathfrak q}$ 가 된다. 차수가 $\dim R$ 과 같다는 것은 Krull 차원 이론의 차원 정리(dimension theorem)다.

## 초곡면의 중복도

정리. $S=k\lbrack x\_1,\dots,x\_m\rbrack\_{(x\_1,\dots,x\_m)}$ 이고 $f\in\mathfrak m$ 이 $0$ 이 아니면, $R=S/(f)$ 의 중복도는 $f$ 의 가장 낮은 동차 성분의 차수다.

증명의 요지. $R$ 의 차수 붙은 환은 $k\lbrack x\_1,\dots,x\_m\rbrack$ 를 $f$ 의 가장 낮은 동차 성분 $f\_e$ 로 나눈 몫이다. 직관 절의 계산처럼 차수 $n$ 미만에서 $f\_e$ 의 배수를 빼면 최고차 계수가 $e$ 가 된다. 평면 곡선($m=2$)에서는 큰 $n$ 에서 $\chi\_{\mathfrak m}(n)=en-e(e-1)/2$ 이고, 뾰족점에서 $e=2$ 이면 $2n-1$ 이다.

## 정칙성과 Cohen–Macaulay 판정

$e(R)\ge 1$ 이다. [정칙 국소환](regular-local-rings.md)은 차수 붙은 환이 다항식환이어서 $e(R)=1$ 이다. 거꾸로 $R$ 의 완비화의 모든 소인자의 차원이 $\dim R$ 이고 $e(R)=1$ 이면 $R$ 은 정칙이다. 이것을 Nagata 정리(Nagata's theorem)라 한다[^2].

$\mathfrak m$-준소 아이디얼을 생성하는 원소 $d$ 개를 매개변수계(system of parameters)라 한다. $\mathfrak q$ 가 매개변수계로 생성되면 $e(\mathfrak q)\le\ell(R/\mathfrak q)$ 다. 어느 한 매개변수계에서 등호가 성립하는 것과 $R$ 이 [Cohen–Macaulay 환](cohen-macaulay-rings.md)인 것이 동치이고, 그때는 모든 매개변수계에서 등호다[^1]. 뾰족점에서 $\mathfrak q=(x)$ 이면 $R/(x)=k\lbrack y\rbrack/(y^2)$ 이므로 $\ell(R/\mathfrak q)=2=e(\mathfrak q)$ 다.

# 활용

- 평면 곡선의 교차 수. 두 곡선이 한 점에서 만나는 교차 수는 두 곡선의 그 점에서의 중복도의 곱 이상이고, 접선을 공유하지 않을 때 등호가 성립한다. 원점을 지나는 일반적인 직선이 뾰족점과 원점에서 두 번 만나는 것이 $1\cdot 2=2$ 다.
- 특이점의 해소. Hironaka 의 특이점 해소에서 Hilbert–Samuel 함수는 특이점을 분류하는 불변량이고, 폭발로 특이점을 바꿀 때 이 함수가 늘지 않는다는 것이 귀납의 근거다.
- 대수기하의 차수. 사영다양체의 원뿔의 꼭짓점에서 국소환의 중복도는 그 다양체의 차수와 같다.

[^1]: Hideyuki Matsumura, *Commutative Ring Theory*, Cambridge University Press, 1986, 13 절, 14 절, 17 절. 차원 정리와 Hilbert–Samuel 다항식, 매개변수계의 중복도, Cohen–Macaulay 판정.
[^2]: Masayoshi Nagata, *Local Rings*, Interscience, 1962, (40.6).

# 연관 문서

## 선수지식

- [Hilbert 함수](hilbert-functions.md)
- [정칙 국소환](regular-local-rings.md)

## 더 알아보기

아직 연결한 문서가 없다.

#ring_theory #algebra #combinatorics
