# 대수적 수체와 정수환

# 개요

대수적 수체는 $\mathbb Q$ 의 유한 확대체이고, 그 정수환 $\mathcal O_K$ 는 $\mathbb Z$ 의 자리를 대신하는 Dedekind 정역이다. 정수론의 문제는 정수 밖으로 나가게 만든다. $x^2+y^2=p$ 는 $(x+iy)(x-iy)$ 로 쪼개려면 $\mathbb Z[i]$ 를, $x^n+y^n=z^n$ 은 $\mathbb Z[\zeta_n]$ 을 요구한다.

넓힌 환에서는 유일분해가 깨진다. $\mathbb Z[\sqrt{-5}]$ 에서 $6=2\cdot3=(1+\sqrt{-5})(1-\sqrt{-5})$ 이고 네 인수가 모두 더 쪼개지지 않는다. 19 세기에 제출된 Fermat 마지막 정리의 증명들이 이 지점에서 무너졌다.

Dedekind 의 해결책은 원소 대신 [아이디얼](ideals-quotient-rings.md)을 분해하는 것이다. 원소의 분해는 깨져도 아이디얼의 소 아이디얼 분해는 언제나 유일하다. 깨진 정도를 재는 유한군이 유수군이고, 그 크기인 유수가 수체의 기본 불변량이다.

수체가 [Galois 확대](galois-theory.md)면 Galois 군이 소 아이디얼들에 작용하고, 각 소수의 분해가 군론의 언어로 서술된다. 이 대응이 유체론의 출발점이며 [이차 상호법칙](quadratic-reciprocity.md)이 그 최소 사례다.

# 직관

## 기약원과 소원의 분리

$\mathbb Z[\sqrt{-5}]$ 에서 노름 $N(x+y\sqrt{-5})=x^2+5y^2$ 는 곱셈적이다. $N(2)=4$ , $N(3)=9$ , $N(1\pm\sqrt{-5})=6$ 이고 노름이 2 나 3 인 원소가 없으므로 넷 다 기약원이다. 그런데 $2\cdot3=(1+\sqrt{-5})(1-\sqrt{-5})=6$ 이다.

$2$ 는 기약이지만 소원이 아니다. $2$ 가 곱 $(1+\sqrt{-5})(1-\sqrt{-5})$ 를 나누면서 어느 인수도 나누지 않는다. $\mathbb Z$ 에서는 기약과 소원이 같지만 일반 환에서는 다르다.

## 아이디얼로의 분해

$2=\mathfrak p^2$ 이고 $1+\sqrt{-5}=\mathfrak p\mathfrak q$ 처럼 쪼개진다면 두 분해가 같은 것이 된다. 그런 $\mathfrak p$ 는 환 안에 원소로는 없고 아이디얼로는 있다.

$$
(2)=(2,1+\sqrt{-5})^2,\qquad
(3)=(3,1+\sqrt{-5})(3,1-\sqrt{-5})
$$

$(1+\sqrt{-5})=(2,1+\sqrt{-5})(3,1+\sqrt{-5})$ 이므로 두 분해가 같은 소 아이디얼 넷의 곱으로 합쳐진다. 아이디얼 수준에서는 모순이 없다.

## 유수군

아이디얼 중에는 $(\alpha)$ 꼴인 주 아이디얼이 있고 그렇지 않은 것이 있다. 주 아이디얼만 있다면 아이디얼의 분해가 곧 원소의 분해라 유일분해가 회복된다.

전체 아이디얼을 주 아이디얼로 나눈 몫이 유수군이며, 자명군일 때만 유일분해가 성립한다. 이 군은 언제나 유한하므로 실패가 아무리 심해도 유한 개의 유형으로 분류된다.

증명은 Minkowski 의 [격자](lattices.md) 논증이다. 수체의 정수환을 $\mathbb R^n$ 의 격자로 실현하면 각 유수류에 노름이 어떤 상계 이하인 아이디얼이 있음을 볼록체 정리가 보장하고, 그런 아이디얼은 유한 개다.

# 정의

## 수체와 정수환

$\mathbb Q$ 의 유한 확대체 $K$ 를 대수적 수체라 하고 $n=[K:\mathbb Q]$ 를 차수라 한다.

$\alpha\in K$ 가 $\mathbb Z$ 계수 일계수 다항식의 근이면 **대수적 정수**다. 그런 원소 전체가 부분환을 이루며 이를 $\mathcal O_K$ 로 쓴다. $K=\mathbb Q$ 면 $\mathcal O_K=\mathbb Z$ 다.

일계수 조건이 없으면 안 된다. $1/2$ 은 $2x-1$ 의 근이지만 일계수 다항식의 근이 아니라 대수적 정수가 아니고, $\frac{1+\sqrt5}2$ 은 $x^2-x-1$ 의 근이라 대수적 정수다. 그래서 $\mathcal O_{\mathbb Q(\sqrt5)}=\mathbb Z[\frac{1+\sqrt5}2]$ 이고 $\mathbb Z[\sqrt5]$ 가 아니다.

$\mathcal O_K$ 는 계수 $n$ 인 자유 $\mathbb Z$ 가군이고 그 기저를 정수기저라 한다.

## 노름, 대각합, 판별식

$K$ 의 매장 $\sigma_1,\dots,\sigma_n$ 에 대해

$$
N(\alpha)=\prod_i\sigma_i(\alpha),\qquad \mathrm{Tr}(\alpha)=\sum_i\sigma_i(\alpha)
$$

는 둘 다 유리수이고, $\alpha\in\mathcal O_K$ 면 정수다. 정수기저 $\omega_1,\dots,\omega_n$ 에 대해

$$
d_K=\det\big(\mathrm{Tr}(\omega_i\omega_j)\big)=\det(\sigma_i(\omega_j))^2
$$

를 **판별식**이라 한다. 정수기저의 선택에 무관한 $K$ 의 불변량이다. 제곱인수 없는 $m$ 에 대한 이차체 $\mathbb Q(\sqrt m)$ 에서는 $m\equiv1\bmod4$ 이면 $d_K=m$ , 그 외에는 $d_K=4m$ 이다.

## Dedekind 정역과 아이디얼 분해

$\mathcal O_K$ 는 Dedekind 정역이다. 곧 Noether 정역이고, 정수적으로 닫혀 있고, 0 이 아닌 모든 소 아이디얼이 극대다.

0 이 아닌 모든 아이디얼 $\mathfrak a$ 가

$$
\mathfrak a=\mathfrak p_1^{e_1}\cdots\mathfrak p_k^{e_k}
$$

로 순서를 빼고 유일하게 쓰인다. 원소의 유일분해가 성립하지 않아도 이것은 성립한다.

아이디얼의 노름은 $N(\mathfrak a)=|\mathcal O_K/\mathfrak a|$ 이고 곱셈적이며, 주 아이디얼에서는 $N((\alpha))=|N(\alpha)|$ 다.

## 유수군

분수 아이디얼 전체가 곱에 대해 군을 이루고 주 분수 아이디얼이 그 부분군이다. 몫

$$
\mathrm{Cl}(K)=\frac{\lbrace\text{분수 아이디얼}\rbrace}{\lbrace\text{주 분수 아이디얼}\rbrace}
$$

이 **유수군**이고 $h_K=|\mathrm{Cl}(K)|$ 가 **유수**다. $h_K=1$ 인 것과 $\mathcal O_K$ 가 주 아이디얼 정역인 것과 유일분해 정역인 것이 동치다. 일반 환에서는 주 아이디얼 정역이 더 강한 조건이지만 Dedekind 정역에서는 둘이 같다.

## 소수의 분해

소수 $p$ 에 대해 $p\mathcal O_K=\prod\mathfrak p_i^{e_i}$ 로 쓰고 $f_i=[\mathcal O_K/\mathfrak p_i:\mathbb F_p]$ 를 잉여차수라 한다. 언제나

$$
\sum_i e_if_i=n
$$

이 성립한다. $e_i\gt 1$ 인 경우가 **분기**이며 $d_K$ 를 나누는 유한 개의 소수에서만 일어난다. 모든 $e_i=f_i=1$ 이면 완전분해, $k=1,e=1,f=n$ 이면 관성이다.

# 성질

## Minkowski 상계와 유수의 유한성

$K$ 가 실매장 $r_1$ 개와 복소매장 쌍 $r_2$ 개를 가지면, 모든 유수류에 다음을 만족하는 아이디얼이 있다.

$$
N(\mathfrak a)\le\Big(\frac4\pi\Big)^{r_2}\frac{n!}{n^n}\sqrt{|d_K|}
$$

노름이 유계인 아이디얼은 유한 개이므로 유수가 유한하다. $n\gt 1$ 이면 우변이 1 보다 커야 하므로 $|d_K|\gt 1$ 이고, 따라서 $\mathbb Q$ 가 아닌 모든 수체에는 분기하는 소수가 있다(Minkowski 정리).

상계가 작으면 유수 계산이 끝난다. $\mathbb Q(\sqrt{-5})$ 에서 상계가 약 $2.8$ 이므로 노름 1, 2 인 아이디얼만 확인하면 되고, $\mathfrak p=(2,1+\sqrt{-5})$ 가 주 아이디얼이 아니므로 $h=2$ 다.

## Dirichlet 단원 정리

$$
\mathcal O_K^\times\cong\mu_K\times\mathbb Z^{r_1+r_2-1}
$$

$\mu_K$ 는 $K$ 안의 단위근으로 이루어진 유한 순환군이다. 허이차체($r_1=0$ , $r_2=1$ )에서는 계수가 0 이라 단원이 유한 개이고, 실이차체($r_1=2$ , $r_2=0$ )에서는 계수가 1 이라 기본단원 하나가 무한히 많은 단원을 생성한다.

$\mathbb Q(\sqrt2)$ 의 기본단원 $1+\sqrt2$ 의 거듭제곱이 Pell 방정식 $x^2-2y^2=\pm1$ 의 해 전체를 준다.

증명은 격자 논증이다. 단원을 로그 좌표로 보내면 초평면 안의 완전계수 격자가 되고, 그 계수가 $r_1+r_2-1$ 임을 Minkowski 정리로 보인다.

## Galois 확대에서의 분해

$K/\mathbb Q$ 가 Galois 면 $\mathrm{Gal}(K/\mathbb Q)$ 가 $p$ 위의 소 아이디얼들에 추이적으로 작용한다. 모든 $e_i$ 가 같고 모든 $f_i$ 가 같아

$$
efg=n
$$

이 된다. 여기서 $g$ 는 소 아이디얼의 개수다. 분기하지 않는 $p$ 에 대해 각 $\mathfrak p$ 의 분해군이 잉여체 확대의 Galois 군과 동형이고, 그 생성원이 Frobenius 원소 $\mathrm{Frob}\_{\mathfrak p}$ 다.

아벨 확대에서는 Frobenius 가 $\mathfrak p$ 의 선택에 무관해 $p$ 만의 함수가 된다. 이것이 Artin 사상이며, 유체론은 이 사상이 유수군의 일반화를 Galois 군에 동형으로 대응시킨다고 말한다.

$K=\mathbb Q(\zeta_m)$ 에서 $\mathrm{Gal}\cong(\mathbb Z/m\mathbb Z)^\times$ 이고 $\mathrm{Frob}\_p=p \bmod m$ 이다. $p$ 가 완전분해할 조건이 $p\equiv1\pmod m$ 이고, 이차 부분체로 내려가면 이차 상호법칙이 된다.

## 유수 공식

Dedekind zeta 함수 $\zeta_K(s)=\sum_{\mathfrak a}N(\mathfrak a)^{-s}$ 의 $s=1$ 에서의 유수가 다음과 같다.

$$
\lim_{s\to1}(s-1)\zeta_K(s)=\frac{2^{r_1}(2\pi)^{r_2}h_KR_K}{w_K\sqrt{|d_K|}}
$$

$R_K$ 는 단원 격자의 조절자, $w_K$ 는 단위근의 개수다. 이차체에서 $\zeta_K(s)=\zeta(s)L(s,\chi_{d_K})$ 로 분해되므로 [Dirichlet L 함수](dirichlet-l-functions.md)의 $L(1,\chi_d)=2\pi h/(w\sqrt{|d|})$ 가 이 공식의 특수한 경우다.

좌변이 양수이므로 이 공식은 $L(1,\chi)\ne0$ 의 증명이기도 하다.

## 유수 계산

허이차체의 유수는 판별식 $D$ 인 이차형식의 축약형 개수와 같다. Gauss 의 형식류 이론과 Dedekind 의 아이디얼류 이론이 같은 것을 센다.

$D=-4$ 는 $\mathbb Z[i]$ 로 유일분해 정역이고 축약형이 $x^2+y^2$ 하나다. $D=-20$ 의 두 형식 $x^2+5y^2$ 과 $2x^2+2xy+3y^2$ 이 $\mathbb Q(\sqrt{-5})$ 의 두 유수류에 대응하며, 앞의 것이 주 아이디얼류, 뒤의 것이 $\mathfrak p=(2,1+\sqrt{-5})$ 의 류다.

$D=-163$ 에서 $h=1$ 인 것이 $e^{\pi\sqrt{163}}$ 이 정수에 극도로 가까운 이유다. 판별식이 음수이고 유수가 1 인 것은 아홉 개뿐이며(Heegner 수) 그 마지막이 $-163$ 이다. 이 목록의 완전성은 1960 년대에 증명되었다.

## 유수의 크기와 계산

허이차체에서는 $|d_K|\to\infty$ 일 때 $h_K\to\infty$ 이므로 유수가 작은 경우가 유한하다. 실이차체에서 $h_K=1$ 인 체가 무한히 많다는 것은 Gauss 의 추측이다(*Disquisitiones Arithmeticae*, Art. 304). 조절자 $R_K$ 가 커질 수 있어 유수 공식이 $h_K$ 를 통제하지 못한다.

고전 알고리즘으로 알려진 최선은 일반 Riemann 가설 아래의 준지수 시간이다[^1]. 양자 알고리즘은 유수군 계산을 아벨 숨은 부분군 문제로 환원해 다항시간에 푼다. [후양자 암호](post-quantum-cryptography.md)가 구조화된 격자를 경계하는 이유다.

# 활용

## Fermat 마지막 정리의 첫 진전

$x^p+y^p=z^p$ 를 $\mathbb Z[\zeta_p]$ 에서 $\prod(x+\zeta_p^iy)=z^p$ 로 쪼개는 것이 Lamé 의 착상이었다. 유일분해가 성립한다면 각 인수가 $p$ 제곱이어야 하고 거기서 모순이 나온다. Kummer 가 $p=23$ 에서 유일분해가 깨짐을 지적해 이 논증을 무너뜨렸다.

Kummer 는 $p$ 가 유수를 나누지 않는 정규소수면 논증이 복구됨을 보였다. 이것이 100 이하의 거의 모든 지수에서 정리를 증명했고, 아이디얼 이론이 여기서 태어났다.

## 소수의 이차형식 표현

$p=x^2+ny^2$ 이 풀리는지는 $p$ 가 $\mathbb Q(\sqrt{-n})$ 에서 완전분해하는지, 그때 나오는 소 아이디얼이 주 아이디얼인지에 달렸다.

$h=1$ 이면 두 조건이 같아져 답이 순수한 합동조건이 된다. $p=x^2+y^2\iff p\equiv1\pmod4$ 가 그 예다. $h\gt 1$ 이면 $p=x^2+5y^2\iff p\equiv1,9\pmod{20}$ 처럼 유수류를 구별하는 조건이 더 필요하고, 유수군이 비순환이면 합동조건으로 서술되지 않고 특정 다항식의 근이 존재하는지를 물어야 한다.

## 디오판토스 방정식

$y^2=x^3-2$ 의 정수해는 $\mathbb Z[\sqrt{-2}]$ 에서 $(y+\sqrt{-2})(y-\sqrt{-2})=x^3$ 으로 쪼개 구한다. 이 환은 유일분해 정역이고 두 인수가 서로소이므로 각각이 세제곱이어야 하며, 전개하면 $(x,y)=(3,\pm5)$ 만 남는다.

이런 논증에는 유수와 단원군이 필요하다. 유수가 3 의 배수가 아니어야 각 인수가 세제곱이라는 단계가 성립하고, 단원을 알아야 경우를 나눌 수 있다.

## 암호와 계산

수체 체 거름법은 가장 빠른 소인수분해 알고리즘이며, 수체에서 노름이 매끄러운 원소를 찾아 관계를 모은다. [RSA](rsa-cryptosystem.md)(Rivest–Shamir–Adleman) 의 키 길이가 이 알고리즘의 준지수 복잡도 $\exp(O((\log N)^{1/3}))$ 로 정해진다.

Ring-LWE(learning with errors) 가 쓰는 $\mathbb Z[x]/(x^n+1)$ 은 $\mathbb Z[\zeta_{2n}]$ 이며, 이 환의 산술 구조가 효율을 주는 동시에 공격 표면이 된다. 단원군과 유수군을 계산하는 양자 알고리즘이 특정 구성에 위협이 된 전례가 있어, 표준화 과정에서 구조를 얼마나 넣을지가 쟁점이었다.

[^1]: J. L. Hafner, K. S. McCurley, *A rigorous subexponential algorithm for computation of class groups*, Journal of the American Mathematical Society **2** (1989), 837–850. 허수이차체의 유수군을 일반 Riemann 가설 아래 준지수 시간에 계산한다. 고정 차수의 수체로 넓힌 것은 J. Buchmann 의 1990 년 작업이다.

# 연관 문서

## 선수지식

- [Dedekind 정역과 아이디얼의 유일분해](dedekind-domains.md)
- [Galois 이론](galois-theory.md)

## 더 알아보기

- [Dirichlet 단수 정리](dirichlet-unit-theorem.md)
- [유체론](class-field-theory.md)
- [아델](adeles.md)

#number_theory #ring_theory #field_theory
