# Rogers–Ramanujan 항등식

# 개요

**Rogers–Ramanujan 항등식(Rogers–Ramanujan identities)** 은 자연수를 두 가지 다른 조건으로 쪼개는 방법의 수가 언제나 같다는 두 등식이다. $9$ 를 이웃한 두 부분의 차이가 $2$ 이상이 되게 쪼개는 방법은 $9$, $8+1$, $7+2$, $6+3$, $5+3+1$ 의 다섯이다. $5$ 로 나눈 나머지가 $1$ 이나 $4$ 인 수만 써서 쪼개는 방법도 $9$, $6$ 하나와 $1$ 셋, $4+4+1$, $4$ 하나와 $1$ 다섯, $1$ 아홉 개의 다섯이다.

첫 조건은 부분끼리의 관계이고 둘째 조건은 부분 하나하나의 조건이어서, 두 개수가 같은 이유가 보이지 않는다. 두 개수를 [분할수](partitions.md)의 방법대로 생성함수로 적으면 한쪽은 급수, 다른 쪽은 무한곱이 되고, 항등식은 둘이 같은 멱급수라는 등식이다.

# 직관

$n=1,\dots,9$ 에 대해 두 조건의 분할을 손으로 센다. 이웃한 부분의 차이가 $2$ 이상인 분할을 간격 분할이라 부르고, 부분이 전부 $1,4,6,9$ 가운데 있는 분할을 나머지 분할이라 부른다.

| n      | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| ------ | - | - | - | - | - | - | - | - | - |
| 간격   | 1 | 1 | 1 | 2 | 2 | 3 | 3 | 4 | 5 |
| 나머지 | 1 | 1 | 1 | 2 | 2 | 3 | 3 | 4 | 5 |

$n=8$ 에서 간격 분할은 $8$, $7+1$, $6+2$, $5+3$ 이고, 나머지 분할은 $6+1+1$, $4+4$, $4$ 하나와 $1$ 넷, $1$ 여덟 개다.

나머지 분할의 개수는 생성함수로 바로 적힌다. 부분 $1,4,6,9,11,\dots$ 마다 몇 번 쓰는지 따로 고르므로, 부분 $m$ 마다 다음 등비급수를 곱한다.

$$
1+q^m+q^{2m}+\cdots=\frac1{1-q^m}
$$

나머지 분할의 개수를 $b_n$ 이라 하면 다음이 나온다.

$$
\sum_{n\ge0}b_nq^n=\prod_{m\equiv\pm1 \pmod 5}\frac1{1-q^m}
$$

간격 분할은 부분끼리의 조건이라 이렇게 곱으로 갈라지지 않는다. 부분의 개수 $r$ 로 나눠 센다. 부분이 $r$ 개인 간격 분할 가운데 가장 작은 것은 홀수 $1,3,\dots,2r-1$ 을 더한 $r^2$ 이다. 큰 부분부터 차례로 $2r-1,2r-3,\dots,1$ 을 빼면 $0$ 이상의 정수 $r$ 개가 커지지 않는 순서로 남는다.

$9$ 는 $8$ 이 되고, $8+1$ 은 $5+0$, $7+2$ 는 $4+1$, $6+3$ 은 $3+2$, $5+3+1$ 은 $0+0+0$ 이 된다.

남은 것은 $n-r^2$ 을 $r$ 개 이하의 부분으로 쪼갠 분할이고, 이 과정은 거꾸로 할 수 있다. 부분이 $r$ 개 이하인 분할은 켤레를 잡으면 부분이 전부 $r$ 이하인 분할이므로 생성함수가 $\frac1{(1-q)(1-q^2)\cdots(1-q^r)}$ 이다. 간격 분할의 개수를 $a_n$ 이라 하고 $r$ 에 대해 더하면 다음이 나온다.

$$
\sum_{n\ge0}a_nq^n=\sum_{r\ge0}\frac{q^{r^2}}{(1-q)(1-q^2)\cdots(1-q^r)}
$$

표의 두 줄이 모든 $n$ 에서 같다는 것은 이 급수와 위의 곱이 같다는 것이고, 이것이 첫째 Rogers–Ramanujan 항등식이다.

# 정의

## q-Pochhammer 기호

**q-Pochhammer 기호(q-Pochhammer symbol)** 는 다음 곱이다.

$$
(a;q)\_n=\prod_{k=0}^{n-1}(1-aq^k),\qquad (a;q)\_\infty=\prod_{k\ge0}(1-aq^k)
$$

$(a;q)\_0=1$ 로 둔다. $(q;q)\_2=(1-q)(1-q^2)$ 이고, $(q;q^5)\_\infty=(1-q)(1-q^6)(1-q^{11})\cdots$ 는 $5$ 로 나눈 나머지가 $1$ 인 지수만 모은 곱이다.

## 두 항등식

**Rogers–Ramanujan 함수(Rogers–Ramanujan functions)** $G$ 와 $H$ 는 다음 급수다.

$$
G(q)=\sum_{n\ge0}\frac{q^{n^2}}{(q;q)\_n},\qquad H(q)=\sum_{n\ge0}\frac{q^{n^2+n}}{(q;q)\_n}
$$

**Rogers–Ramanujan 항등식** 은 두 급수를 곱으로 쓰는 다음 두 등식이다[^1].

$$
G(q)=\frac1{(q;q^5)\_\infty(q^4;q^5)\_\infty},\qquad H(q)=\frac1{(q^2;q^5)\_\infty(q^3;q^5)\_\infty}
$$

직관 절의 표가 $G$ 의 처음 계수다.

$$
G(q)=1+q+q^2+q^3+2q^4+2q^5+3q^6+3q^7+4q^8+5q^9+\cdots
$$

## 분할로 쓴 꼴

두 등식은 분할의 개수에 대한 다음 진술과 같다.

- 이웃한 부분의 차이가 $2$ 이상인 $n$ 의 분할의 개수는, 부분이 전부 $5$ 로 나눠 나머지가 $1$ 이나 $4$ 인 $n$ 의 분할의 개수와 같다.
- 이웃한 부분의 차이가 $2$ 이상이고 부분 $1$ 이 없는 $n$ 의 분할의 개수는, 부분이 전부 $5$ 로 나눠 나머지가 $2$ 나 $3$ 인 $n$ 의 분할의 개수와 같다.

둘째 진술을 $n=6$ 에서 보면 앞의 것은 $6$, $4+2$ 이고 뒤의 것은 $3+3$, $2+2+2$ 로 둘씩이다. 부분 $1$ 이 없고 부분이 $r$ 개인 간격 분할 가운데 가장 작은 것은 짝수 $2,4,\dots,2r$ 을 더한 $r^2+r$ 이어서 $H$ 의 분자가 $q^{n^2+n}$ 이다.

# 성질

## 급수 쪽의 함수방정식

$G$ 에 부분의 개수를 세는 변수 $z$ 를 넣는다.

$$
G(z;q)=\sum_{n\ge0}\frac{z^nq^{n^2}}{(q;q)\_n}
$$

$z^n$ 의 계수는 부분이 $n$ 개인 간격 분할의 생성함수다. 이 함수는 다음 $q$ 차분방정식(q-difference equation)을 만족하고, $G(0;q)=1$ 과 함께 이 방정식이 $G(z;q)$ 를 하나로 정한다.

$$
G(z;q)=G(zq;q)+zq\thinspace G(zq^2;q)
$$

식으로는 다음 계산에서 나온다. 마지막 등호는 $m=n-1$ 로 바꿔 얻는다.

$$
G(z;q)-G(zq;q)=\sum_{n\ge1}\frac{z^nq^{n^2}(1-q^n)}{(q;q)\_n}=\sum_{n\ge1}\frac{z^nq^{n^2}}{(q;q)\_{n-1}}=zq\thinspace G(zq^2;q)
$$

분할로는 간격 분할을 부분 $1$ 이 없는 것과 있는 것으로 가른다. 부분 $1$ 이 없으면 모든 부분에서 $1$ 을 빼도 간격 분할이므로 $G(zq;q)$ 가 나온다. 부분 $1$ 이 있으면 그것을 떼고($zq$) 나머지 부분이 전부 $3$ 이상이므로 모든 부분에서 $2$ 를 빼서 $G(zq^2;q)$ 가 나온다.

곱 쪽의 증명은 Jacobi 삼중곱으로 만든 $z$ 의 함수가 같은 방정식과 같은 초깃값을 만족하고 $z=1$ 에서 곱과 같아짐을 보이는 것이다[^2]. 첫 증명은 Rogers 가 1894 년에 냈고, Ramanujan 이 1913 년경 다시 찾았으며, Schur 가 1917 년에 독립적으로 증명했다[^1].

## Jacobi 삼중곱으로 쓴 꼴

[theta 급수](theta-series.md)의 Jacobi 삼중곱 항등식(Jacobi triple product identity)에 $q$ 대신 $q^5$, $w=-q^{1/2}$ 를 넣으면 다음이 나온다.

$$
\prod_{n\ge1}(1-q^{5n})(1-q^{5n-2})(1-q^{5n-3})=\sum_{j\in\mathbb Z}(-1)^jq^{j(5j+1)/2}
$$

좌변은 지수가 $5$ 로 나눠 나머지 $0,2,3$ 인 인자의 곱이다. 첫째 항등식의 곱 쪽에 $(q;q)\_\infty$ 를 곱하면 나머지 $1,4$ 인 인자가 약분되어 이 좌변이 남는다. 그러므로 첫째 항등식은 다음 등식과 동치다.

$$
(q;q)\_\infty\sum_{n\ge0}\frac{q^{n^2}}{(q;q)\_n}=\sum_{j\in\mathbb Z}(-1)^jq^{j(5j+1)/2}=1-q^2-q^3+q^9+q^{11}-\cdots
$$

둘째 항등식은 $w=-q^{3/2}$ 를 넣어 같은 방식으로 지수 $j(5j+3)/2$ 의 급수와 동치가 된다. 오른쪽은 [분할수](partitions.md)의 오각수 정리(pentagonal number theorem)와 같은 꼴의 성긴 급수다.

## Gordon 정리

Gordon 정리(Gordon's theorem)는 두 항등식을 법 $2k+1$ 로 넓힌다[^3]. 분할에서 부분 $j$ 가 나타나는 횟수를 $f_j$ 라 한다. $k\ge2$, $1\le i\le k$ 에 대해, 모든 $j$ 에서 $f_j+f_{j+1}\le k-1$ 이고 $f_1\le i-1$ 인 $n$ 의 분할의 개수는, 부분이 $2k+1$ 로 나눠 나머지 $0,\pm i$ 가 아닌 $n$ 의 분할의 개수와 같다.

$k=2$ 에서 $f_j+f_{j+1}\le1$ 은 이웃한 부분의 차이가 $2$ 이상이라는 조건이다. $i=2$ 가 첫째 항등식, $i=1$ 이 둘째 항등식이다. Andrews 는 같은 결과를 급수와 곱의 등식으로 썼다[^2].

## Rogers–Ramanujan 연분수

두 함수의 비는 [연분수](continued-fractions.md)로 전개된다.

$$
R(q)=q^{1/5}\frac{H(q)}{G(q)}=\cfrac{q^{1/5}}{1+\cfrac{q}{1+\cfrac{q^2}{1+\cfrac{q^3}{1+\cdots}}}}
$$

이것을 **Rogers–Ramanujan 연분수(Rogers–Ramanujan continued fraction)** 라 한다. Ramanujan 은 1913 년 Hardy 에게 보낸 편지에 다음 값을 적었다[^4].

$$
R(e^{-2\pi})=\sqrt{\frac{5+\sqrt5}2}-\frac{\sqrt5+1}2
$$

## 모듈러성

$q=e^{2\pi i\tau}$ 로 두면 $R$ 은 합동부분군(congruence subgroup) $\Gamma(5)$ 에 대한 모듈러 함수(modular function)이고, 종수가 $0$ 인 [모듈러 곡선](modular-curves.md) $X(5)$ 의 좌표 함수가 된다[^4]. Dedekind eta 함수(Dedekind eta function) $\eta(\tau)=q^{1/24}(q;q)\_\infty$ 로 다음 관계가 성립한다.

$$
\frac1{R(q)^5}-11-R(q)^5=\frac{\eta(\tau)^6}{\eta(5\tau)^6}
$$

$q^{-1/60}G(q)$ 와 $q^{11/60}H(q)$ 도 $\Gamma(5)$ 에 대한 모듈러 함수다. 그래서 Rogers–Ramanujan 연분수의 특수값은 대수적 수다.

# 활용

- [아핀 Lie 대수](affine-lie-algebras.md). Lepowsky 와 Wilson 은 $A_1^{(1)}$ 의 준위 $3$ 표준 가군의 지표를 정점작용소로 두 가지로 계산해 두 항등식을 증명했다[^5]. 곱 쪽은 지표 공식에서, 급수 쪽은 가군의 기저에서 나온다.
- [Virasoro 대수](virasoro-algebra.md). 중심 전하 $c=-22/5$ 인 극소 모형(minimal model) $M(2,5)$ 의 두 기약 표현의 지표가 $q^{11/60}H(q)$ 와 $q^{-1/60}G(q)$ 다.
- 통계역학. Baxter 는 이웃한 칸에 입자를 함께 두지 않는 삼각 격자 모형인 단단한 육각형 모형(hard hexagon model)을 풀면서 분배함수를 $G$ 와 $H$ 로 썼다[^6].
- 분할 항등식. 간격 조건과 나머지 조건을 맞세우는 Schur 정리, Göllnitz–Gordon 항등식 같은 분할 정리가 같은 꼴로 증명된다[^2].

[^1]: L. J. Rogers, "Second memoir on the expansion of certain infinite products", *Proc. London Math. Soc.* 25 (1894); L. J. Rogers, S. Ramanujan, "Proof of certain identities in combinatory analysis", *Proc. Cambridge Philos. Soc.* 19 (1919); I. Schur, "Ein Beitrag zur additiven Zahlentheorie und zur Theorie der Kettenbrüche", *Sitzungsber. Preuss. Akad. Wiss.* (1917).
[^2]: G. Andrews, *The Theory of Partitions* (1976), 7장.
[^3]: B. Gordon, "A combinatorial generalization of the Rogers–Ramanujan identities", *Amer. J. Math.* 83 (1961).
[^4]: G. Andrews, B. Berndt, *Ramanujan's Lost Notebook, Part I* (2005), 1장.
[^5]: J. Lepowsky, R. L. Wilson, "The structure of standard modules I", *Invent. Math.* 77 (1984).
[^6]: R. J. Baxter, "Hard hexagons: exact solution", *J. Phys. A* 13 (1980).

# 연관 문서

## 선수지식

- [분할수](partitions.md)

## 더 알아보기

- [Bailey 보조정리](bailey-lemma.md)

#combinatorics #number_theory
