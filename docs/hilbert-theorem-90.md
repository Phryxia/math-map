# Hilbert 정리 90

# 개요

순환 Galois 확대 $L/K$ 에서 노름이 $1$ 인 $L$ 의 원소는 어떤 원소와 그 켤레의 비로 쓰인다. 생성원 $\sigma$ 에 대해 $N_{L/K}(a)=1$ 인 것과 $a=b/\sigma(b)$ 인 $b\in L^{\times}$ 가 있는 것이 동치다.

코호몰로지로 적으면 $H^1(G,L^{\times})=1$ 이고, 이 소멸이 Kummer 이론과 Galois 강하의 출발 조건이 된다.

# 직관

$x^2+y^2=z^2$ 의 양의 정수해는 $(3,4,5)$, $(5,12,13)$, $(8,15,17)$ 로 이어진다. 전부 $m\gt n\gt0$ 에서 $(m^2-n^2,\thinspace 2mn,\thinspace m^2+n^2)$ 로 나온다. 이 공식이 왜 이 꼴인지 묻는다.

$z$ 로 나누면 $(x/z)^2+(y/z)^2=1$ 이므로 단위원 위의 유리점을 찾는 문제다. $\alpha=x/z+(y/z)i$ 로 두면 $\alpha\bar\alpha=1$ 이고, 켤레를 취하는 것은 $\mathbb Q(i)/\mathbb Q$ 의 Galois 군이 하는 작용이다. 곧 노름이 $1$ 인 $\mathbb Q(i)$ 의 원소를 전부 찾는 문제다.

$\beta=m+ni$ 를 아무렇게나 잡고 $\alpha=\beta/\bar\beta$ 를 만들면 노름이 $1$ 이다. 계산하면 다음이 나온다.

$$
\frac{m+ni}{m-ni}=\frac{(m^2-n^2)+2mni}{m^2+n^2}
$$

실수부와 허수부의 분자가 공식의 두 변이다. 그러므로 공식이 모든 해를 준다는 것은 노름이 $1$ 인 원소가 전부 $\beta/\bar\beta$ 꼴이라는 것과 같고, 그것이 이 정리다.

같은 진술이 켤레가 둘인 확대에만 성립하는 것이 아니라 순환 Galois 확대 전체에서 성립한다.

# 정의

$L/K$ 를 유한 Galois 확대, $G=\mathrm{Gal}(L/K)$ 라 한다.

## 노름

$$
N_{L/K}(a)=\prod_{\sigma\in G}\sigma(a)
$$

노름은 $L^{\times}$ 에서 $K^{\times}$ 로 가는 군 준동형이다.

## 1 코사이클

함수 $a:G\to L^{\times}$ 가 모든 $\sigma,\tau$ 에 대해

$$
a_{\sigma\tau}=a_{\sigma}\cdot\sigma(a_{\tau})
$$

를 만족하면 **1 코사이클**이라 한다. $b\in L^{\times}$ 에서 $a_{\sigma}=\sigma(b)/b$ 로 얻는 것이 **1 코바운더리**이고, 코사이클 군을 코바운더리 군으로 나눈 것이 [군 코호몰로지](group-cohomology.md) $H^1(G,L^{\times})$ 다.

# 성질

## 순환 판본

**정리(Hilbert).** $G=\langle\sigma\rangle$ 이 위수 $n$ 의 순환군이면, $a\in L^{\times}$ 에 대해 $N_{L/K}(a)=1$ 인 것과 $a=b/\sigma(b)$ 인 $b\in L^{\times}$ 가 있는 것이 동치다.[^1]

## 코호몰로지 판본

**정리(Noether).** 모든 유한 Galois 확대에서 $H^1(G,L^{\times})=1$ 이다.

증명은 Dedekind 의 지표 독립성을 쓴다. 서로 다른 $\sigma\in G$ 는 $L^{\times}$ 에서 $L$ 로 가는 지표로 보면 $L$ 위에서 일차독립이므로, 코사이클 $a$ 에 대해

$$
b=\sum_{\sigma\in G}a_{\sigma}\thinspace\sigma(c)
$$

가 $0$ 이 아니게 하는 $c\in L$ 이 있다. 코사이클 조건으로 $\tau(b)=a_{\tau}^{-1}b$ 가 나오므로 $a_{\tau}=b/\tau(b)$ 이고 $a$ 는 코바운더리다.

순환군에서는 $H^1$ 이 노름 사상의 핵을 $\sigma(x)/x$ 꼴의 원소들로 나눈 몫이므로, 이 소멸이 순환 판본과 같은 진술이 된다.

## 가법 판본

$L^{+}$ 를 덧셈군으로 보면 $H^1(G,L^{+})=0$ 이다. 대각합 $\mathrm{Tr}\_{L/K}$ 가 전사라는 것에서 따라오고, 정규기저 정리를 쓰면 $L$ 이 $K\lbrack G\rbrack$ 위의 자유 가군이므로 모든 차수에서 $H^n(G,L^{+})=0$ 이다.

## 비가환 판본

**정리(Speiser).** $H^1(G,\mathrm{GL}\_n(L))=1$ 이다.

$n=1$ 이 위의 정리다. 이 소멸은 $L$ 위의 벡터 공간에 내려오는 Galois 작용이 항상 $K$ 위의 벡터 공간에서 오는 것이라는 뜻이고, Galois 강하가 성립하는 근거가 된다. $\mathrm{SL}\_n$ 과 심플렉틱군에서도 $H^1$ 이 자명하다.

# 활용

- **Kummer 이론.** $K$ 가 $1$ 의 원시 $n$ 제곱근 $\zeta$ 를 품으면, 차수 $n$ 의 순환 확대는 모두 $L=K(a^{1/n})$ 꼴이다. 증명은 $N_{L/K}(\zeta^{-1})=1$ 에서 정리 90 으로 $\zeta^{-1}=\sigma(b)/b$ 인 $b$ 를 얻고, 그 $b$ 가 $b^{n}\in K$ 를 만족함을 확인하는 것이다.
- **Brauer 군.** $H^1$ 이 소멸하므로 확대열의 연결 준동형이 $H^2(G,L^{\times})$ 를 [Brauer 군](brauer-groups.md)의 부분군으로 심고, 순환 확대에서는 그 군이 $K^{\times}/N_{L/K}L^{\times}$ 와 같다.
- **곡선 위의 유리점.** 단위원과 Pell 원뿔곡선의 유리점 매개화가 노름 $1$ 인 원소의 결정과 같은 문제다. 피타고라스 삼조의 공식이 그 특수한 경우다.
- **형태의 분류.** $K$ 위의 대상이 $L$ 위에서 동형이 되는 방식들, 곧 $K$ 형태의 집합이 $H^1(G,\mathrm{Aut})$ 로 분류된다. 자기동형군이 $\mathrm{GL}\_n$ 일 때 이 집합이 한 점이라는 것이 Speiser 의 판본이다.

[^1]: D. Hilbert, "Die Theorie der algebraischen Zahlkörper", Jahresber. Deutsch. Math.-Verein. 4 (1897), 정리 90. 코호몰로지 판본과 Speiser 의 일반화는 J.-P. Serre, *Local Fields*, Graduate Texts in Mathematics 67, Springer, 1979, 10 장과 J.-P. Serre, *Galois Cohomology*, Springer, 1997, 1 장 2 절에 있다.

# 연관 문서

## 선수지식

- [Galois 이론](galois-theory.md)
- [군 코호몰로지](group-cohomology.md)

## 더 알아보기

- [Kummer 이론](kummer-theory.md)

#field_theory #algebra #number_theory #group_theory
