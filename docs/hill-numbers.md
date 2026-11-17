# Hill 수

# 개요

**Hill 수(Hill numbers)** 는 종류마다의 비율로부터 "고르게 섞인 종류가 몇 개 있는 것과 같은가" 를 계산한 다양도의 척도다. 물고기 여덟 마리가 다섯 종인데 한 종이 세 마리, 다른 종이 두 마리, 나머지 셋이 한 마리씩이면, 다섯 종이 고르게 섞인 연못보다 덜 다양하다고 느끼지만 얼마나 덜한지는 종 수만으로 나오지 않는다.

Hill 수는 흔한 종에 얼마나 무게를 둘지를 정하는 차수 $q$ 하나로 종 수, Shannon 엔트로피, Simpson 지수를 모두 "같은 다양도를 내는 고른 종의 수" 로 바꾸어 같은 단위로 견주게 한다.

# 직관

연못의 다섯 종의 비율이 $3/8,2/8,1/8,1/8,1/8$ 이다. 같은 종 두 마리를 연달아 뽑을 확률은 비율의 제곱의 합이다.

$$
\Bigl(\frac38\Bigr)^2+\Bigl(\frac28\Bigr)^2+3\Bigl(\frac18\Bigr)^2=\frac{16}{64}=\frac14
$$

$k$ 종이 고르게 섞인 연못에서는 이 확률이 $1/k$ 이므로, 이 연못은 같은 종을 연달아 뽑는 정도로 보면 고른 네 종의 연못과 같다.

종 수로는 다섯, 같은 종을 연달아 뽑을 확률로는 넷이다. 두 값의 차이는 드문 세 종을 얼마나 셈에 넣는지에서 온다. 종 수는 드문 종도 한 종으로 세고, 연달아 뽑을 확률은 흔한 종이 대부분을 정한다.

# 정의

종류 $i=1,\dots,S$ 의 비율이 $p_i\gt0$, $\sum_ip_i=1$ 일 때 차수 $q\ge0$, $q\ne1$ 의 **Hill 수(Hill number)** 는

$$
{}^qD=\Bigl(\sum_{i=1}^S p_i^q\Bigr)^{1/(1-q)}
$$

이고, $q=1$ 에서는 $q\to1$ 의 극한

$$
{}^1D=\exp\Bigl(-\sum_{i=1}^S p_i\log p_i\Bigr)
$$

로 정한다[^1]. 지수 안은 [Shannon 엔트로피](entropy.md)다.

- ${}^0D=S$ 는 종 수다.
- ${}^1D$ 는 Shannon 엔트로피의 지수다.
- ${}^2D=1/\sum_ip_i^2$ 은 Simpson 지수(Simpson index) $\sum_ip_i^2$ 의 역수다.

직관 절의 연못에서 ${}^0D=5$, ${}^2D=4$ 이고, 엔트로피가 약 $1.494$ 이므로 ${}^1D\approx4.46$ 이다.

# 성질

## 고른 종의 수

$S$ 종이 모두 비율 $1/S$ 이면 모든 $q$ 에서 ${}^qD=S$ 다. 그래서 ${}^qD$ 를 차수 $q$ 의 **유효 종 수(effective number of species)** 라 한다. 두 연못을 합쳐 종이 겹치지 않고 같은 크기이면 다양도가 두 배가 되는 것처럼, 유효 종 수는 엔트로피나 Simpson 지수와 달리 덧셈과 배수 비교가 뜻을 가진다[^2].

## 차수에 대한 단조성

비율 $p_i$ 를 무게로 한 $p_i$ 의 거듭제곱 평균 $\bigl(\sum_ip_i\cdot p_i^{q-1}\bigr)^{1/(q-1)}$ 의 역수가 ${}^qD$ 이다. 거듭제곱 평균은 지수에 대해 증가하므로 ${}^qD$ 는 $q$ 에 대해 증가하지 않는다. 직관 절에서 $5\ge4.46\ge4$ 다. 모든 비율이 같을 때만 등호가 성립한다.

## Rényi 엔트로피와의 관계

$\log{}^qD=\frac{1}{1-q}\log\sum_ip_i^q$ 는 차수 $q$ 의 Rényi 엔트로피(Rényi entropy)다. Hill 수는 Rényi 엔트로피의 지수이고, $q\to\infty$ 에서 가장 흔한 종의 비율의 역수 $1/\max_ip_i$ 로 간다.

# 활용

- 생태학의 다양도 비교. 지역마다 $q=0,1,2$ 의 Hill 수를 함께 적어, 드문 종이 많은 지역과 고르게 섞인 지역을 가른다. 표본 크기를 맞출 때는 [희박화](rarefaction.md)와 함께 쓴다.
- 면역 수용체와 미생물 군집. 서열 종류의 비율로 클론 다양성을 견준다.
- 경제학의 집중도. 시장 점유율의 제곱합인 Herfindahl–Hirschman 지수(Herfindahl–Hirschman index)는 ${}^2D$ 의 역수이고, ${}^2D$ 는 같은 집중도를 내는 같은 크기 기업의 수다.

[^1]: M. O. Hill, "Diversity and evenness: a unifying notation and its consequences", *Ecology* 54 (1973), 427–432.
[^2]: L. Jost, "Entropy and diversity", *Oikos* 113 (2006), 363–375.

# 연관 문서

## 선수지식

- [Shannon 엔트로피](entropy.md)

## 더 알아보기

아직 연결한 문서가 없다.

#information_theory #statistics #probability
