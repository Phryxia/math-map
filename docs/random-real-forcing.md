# 무작위 실수 강제법

# 개요

**무작위 실수 강제법(random real forcing)** 은 집합론의 모형에 동전을 끝없이 던져 얻은 것처럼 보이는 [실수](real-numbers.md)를 더하는 강제법이다. 모형 안에서 정의된 길이 $0$ 인 집합, 예를 들어 이진 전개에서 $0$ 의 비율이 $1/2$ 로 가지 않는 수들의 집합에 새 실수가 들어가면 그 실수는 무작위로 뽑은 것이라 할 수 없다. 모형 안의 실수는 저마다 그 실수 하나만 담은 길이 $0$ 인 집합에 들어 있으므로, 이 집합들을 모두 피하는 실수는 모형 안에 없다. 무작위 실수 강제법은 길이가 양수인 집합들을 조건으로 써서, 모형의 길이 $0$ 인 집합 어디에도 속하지 않는 실수를 더한다.

# 직관

기저 모형 $V$ 에 실수를 하나 더하려 한다. [강제법](forcing.md)은 더할 실수를 점점 좁혀 가는 조건들을 정하고, 일반 필터가 그 조건들을 하나의 실수로 모으게 한다. 조건을 $\lbrack 0,1\rbrack$ 의 측도가 양수인 Borel 집합으로 두고, 더 강한 조건을 더 작은 집합으로 정한다. 조건 $\lbrack 0,1/2\rbrack \supseteq \lbrack 0,1/4\rbrack \supseteq \cdots$ 를 따라가면 더할 실수의 자리가 좁혀진다.

$V$ 안에서 이진 전개의 $0$ 의 비율이 $1/2$ 로 가지 않는 수들의 집합 $N$ 을 잡는다. $N$ 의 측도는 $0$ 이다. 조건 $\lbrack 0,1/2\rbrack$ 에서 $N$ 을 빼면 측도가 그대로 $1/2$ 이므로 $\lbrack 0,1/2\rbrack \setminus N$ 도 조건이다. 어떤 조건 $B$ 에서도 $B\setminus N$ 이 조건이므로 "$N$ 을 피하는 조건" 은 모든 조건 아래에 있고, 일반 필터는 그런 조건을 지난다. 그래서 새 실수는 $N$ 에 속하지 않는다.

$N$ 대신 $V$ 안의 다른 측도 $0$ 집합을 잡아도 같은 논증이 된다. 새 실수는 $V$ 안의 측도 $0$ 집합 어느 것에도 속하지 않는다. 동전을 끝없이 던져 얻은 수도 확률 $1$ 로 정해진 측도 $0$ 집합 하나를 피한다.

# 정의

## 무작위 대수

$\mathcal B$ 를 $\lbrack 0,1\rbrack$ 의 Borel 집합족, $\mathcal N$ 을 Lebesgue [측도](measure.md) $0$ 인 집합들의 아이디얼(ideal)이라 할 때 몫 $\mathcal B/\mathcal N$ 을 **무작위 대수(random algebra)** 라 한다. 무작위 대수는 완비 [Boole 대수](boolean-algebras.md)이고, $0$ 이 아닌 원소는 측도가 양수인 Borel 집합의 동치류다.

강제법의 조건 순서는 포함관계이고, $B' \le B$ 는 $B' \setminus B$ 의 측도가 $0$ 이라는 뜻이다.

직관 절의 $\lbrack 0,1/2\rbrack$ 와 $\lbrack 0,1/2\rbrack\setminus N$ 은 측도 $0$ 집합만큼 다르므로 무작위 대수의 같은 원소다. $\lbrack 0,1/4\rbrack \le \lbrack 0,1/2\rbrack$ 이고, $\lbrack 0,1/2\rbrack$ 와 $\lbrack 1/2,1\rbrack$ 은 교집합의 측도가 $0$ 이므로 공통의 더 강한 조건이 없다.

## 무작위 실수

$V$ 의 무작위 대수에 대한 일반 필터 $G$ 가 주어지면, $G$ 의 모든 원소의 코드를 확대 모형에서 해석한 Borel 집합들에 공통으로 속하는 실수가 하나뿐이다. 그 실수 $r$ 을 $V$ 위의 **무작위 실수(random real)** 라 한다.

$V$ 의 실수 $a$ 는 $V$ 위의 무작위 실수가 아니다. 한 점 집합 $\lbrace a\rbrace$ 가 $V$ 안의 측도 $0$ 집합이고, 직관 절의 논증대로 무작위 실수는 이 집합을 피한다.

# 성질

## 측도 0 집합에 의한 특징

$r$ 이 $V$ 위에서 무작위인 것과 $V$ 안에 코드가 있는 모든 측도 $0$ Borel 집합에 $r$ 이 속하지 않는 것은 동치다.

## 가산 사슬 조건

무작위 대수는 가산 사슬 조건(countable chain condition)을 만족한다. 곧 서로 공통의 더 강한 조건이 없는 조건들의 족은 가산이다.

쌍마다 교집합의 측도가 $0$ 인 양의 측도 집합들의 족을 잡는다. 이들은 측도 $0$ 에서 서로소이므로 측도가 $1/n$ 보다 큰 것은 $n$ 개를 넘지 못하고, 족 전체는 그런 가산 개 모임의 합집합이다.

가산 사슬 조건을 만족하는 강제법은 [기수](cardinality.md)를 보존한다. 공종도(cofinality)와 기수가 확대에서 그대로이므로 [연속체 가설](continuum-hypothesis.md) 같은 진술의 값을 기수 계산 없이 따질 수 있다.

## 새 함수의 지배

$f : \omega \to \omega$ 가 확대 $V\lbrack r\rbrack$ 에 있으면 $V$ 의 함수 $g$ 가 있어 모든 $n$ 에서 $f(n) \le g(n)$ 이다[^1].

이름 $\dot f$ 와 조건 $B$ 를 잡고, $f(n)$ 의 값마다 그 값을 강제하는 부분집합으로 $B$ 를 쪼갠다. 측도의 가산가법성으로 각 $n$ 에서 유한 개의 값이 측도 $\mu(B)/2^{n+2}$ 만 남기고 $B$ 를 채운다. 그 값들의 최댓값을 $g(n)$ 으로 잡고 남은 부분을 모든 $n$ 에서 빼면, 측도가 $\mu(B)/2$ 이상인 조건이 $f\le g$ 를 강제한다.

조건을 유한 이진열로 둔 Cohen 강제법(Cohen forcing)에서는 이 성질이 성립하지 않고 기저 모형의 모든 함수를 넘어서는 함수가 생긴다.

## Cohen 실수와의 대비

무작위 실수는 $V$ 의 측도 $0$ 집합을 전부 피하고, Cohen 실수는 $V$ 의 [제1범주 집합](baire-category.md)을 전부 피한다. 두 성질은 서로를 주지 않는다.

무작위 실수 강제법은 Cohen 실수를 더하지 않고, Cohen 강제법은 무작위 실수를 더하지 않는다[^2].

Cohen 실수를 자연수열로 보면 $V$ 의 어떤 함수에도 지배되지 않으므로, 앞 절의 지배 성질에 따라 무작위 확대에는 Cohen 실수가 없다. 한편 Cohen 확대에서는 기저 모형의 실수 전체가 측도 $0$ 집합이 되고, 무작위 확대에서는 기저 모형의 실수 전체가 제1범주 집합이 된다.

## 가측성과의 관계

무작위 실수를 반복해서 더하면 $\aleph\_1$ 개의 측도 $0$ 집합의 합집합이 $\lbrack 0,1\rbrack$ 을 덮지 못하게 만들 수 있다. 도달 불가능 기수(inaccessible cardinal)를 붕괴시킨 모형에서는 실수의 모든 부분집합이 Lebesgue 가측인 집합론의 모형이 나온다.[^3]

# 활용

- 측도와 범주에 관한 진술의 독립성을 보인다. "측도 $0$ 집합 $\aleph\_1$ 개의 합집합이 측도 $0$ 이다" 같은 [기수 불변량](cardinal-characteristics.md) 사이의 부등식이 어느 강제법을 쓰느냐로 갈린다.
- [Martin 의 공리](martins-axiom.md). Martin 의 공리는 가산 사슬 조건 강제법 전부를 다루므로 무작위 대수에도 적용되고, 그 결과 측도의 가법성이 연속체 크기까지 올라간다.
- [Boolean 값 모형](boolean-valued-models.md). 무작위 대수를 값으로 쓰면 명제의 값이 측도 대수의 원소이고, 그 원소의 측도가 명제가 성립할 확률 구실을 한다.
- [확률적 방법](probabilistic-method.md)과의 대응. 성질을 만족하는 점이 측도 $1$ 로 존재한다는 논증이 일반 확대에서 실제 점의 구성이 된다.

[^1]: T. Bartoszyński and H. Judah, *Set Theory: On the Structure of the Real Line*, A K Peters (1995), Ch. 3. 무작위 강제법의 지배 성질과 두 아이디얼의 대비가 이 장의 내용이다.

[^2]: K. Kunen, *Set Theory*, College Publications (2011), Ch. V §4. 무작위 강제법과 Cohen 강제법이 서로의 일반 실수를 더하지 않음을 보인다.

[^3]: R. M. Solovay, "A model of set-theory in which every set of reals is Lebesgue measurable", *Annals of Mathematics* 92 (1970), 1–56.

# 연관 문서

## 선수지식

- [Boolean 값 모형](boolean-valued-models.md)

## 더 알아보기

- [기수 불변량](cardinal-characteristics.md)

#set_theory #logic #measure_theory
