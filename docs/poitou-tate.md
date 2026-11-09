# Poitou–Tate 완전열

# 개요

**Poitou–Tate 완전열(Poitou–Tate exact sequence)**[^1] 은 유리수 위에서 정의된 대상을 소수마다, 그리고 [실수](real-numbers.md) 위에서 따로 볼 때 그 국소 모습들이 서로 어떻게 묶여 있는지를 적은 9 항 완전열이다. 방정식 $x^2+y^2=-z^2$ 은 실수에서도, $p=2$ 인 [p 진수](p-adic-numbers.md)에서도 $0$ 아닌 해가 없지만, 홀수 소수 $p$ 의 $p$ 진수에서는 해가 있다. 유리수 $a,b$ 를 어떻게 잡아도 $ax^2+by^2=z^2$ 이 해를 갖지 않는 자리의 개수는 이처럼 항상 짝수다. 완전열은 이런 제약을 유한 Galois 가군을 계수로 하는 코호몰로지 전체에 대해 한 줄로 적고, 두 [Selmer 군](selmer-tate-shafarevich.md)의 크기 비를 국소 자료만으로 계산하게 한다.

# 직관

Selmer 군은 대역 코호몰로지류 가운데 모든 자리에서 정해진 국소 조건을 만족하는 것들의 군이다. 국소 코호몰로지의 크기는 자리마다 셀 수 있다. 대역류를 자리마다 보낸 값들의 조합 가운데 어느 것이 실제로 대역류에서 오는지 모르면, 국소 크기를 전부 알아도 Selmer 군의 크기는 나오지 않는다.

개요의 예가 그 제약 하나다. 계수가 $\pm1$ 인 경우 대역류는 유리수 $a$ 를 제곱 배 차이를 무시하고 본 것이고, 자리 $v$ 에서의 값은 같은 $a$ 를 $\mathbb Q_v$ 의 원소로 본 것이다.

두 대역류 $a,b$ 의 자리 $v$ 에서의 짝을, $ax^2+by^2=z^2$ 이 $\mathbb Q_v$ 에서 $0$ 아닌 해를 가지면 $0$, 아니면 $\tfrac12$ 로 정한다. 해가 없는 자리의 수가 짝수이므로 모든 자리의 짝을 더하면 $\mathbb Z$ 를 법으로 $0$ 이다. $a=b=-1$ 이면 짝이 $\tfrac12$ 인 자리는 실수와 $2$ 진수 둘이다.

이 제약이 대역류 전체의 상을 정한다. 유한 개 자리 $S$ 만 보고 국소 값들의 공간을 $V$ 라 하면, 자리별 짝의 합은 $V$ 위의 비퇴화 대칭 짝이고, 대역류의 상 $A$ 는 자기 자신과 짝이 모두 $0$ 이면서 그런 부분공간 가운데 가장 큰 것, 곧 $A=A^{\perp}$ 이다. 국소 조건을 모은 부분공간을 $L$ 이라 하면 Selmer 군은 $A\cap L$ 이고, 조건을 $L^{\perp}$ 로 바꾼 쌍대 Selmer 군은 $A\cap L^{\perp}=(A+L)^{\perp}$ 이다. 차원을 세면

$$
\dim(A\cap L)-\dim(A\cap L^{\perp})=\dim L-\tfrac12\dim V
$$

이고, 오른쪽에 $A$ 가 없다. 모르는 대역 상이 두 Selmer 군의 차이에서 사라진다. 이 계산을 모든 유한 Galois 가군과 모든 코호몰로지 차수에 대해 적은 것이 Poitou–Tate 완전열이다.

# 정의

## Cartier 쌍대

수체 또는 국소체 $K$ 와 위수가 $K$ 의 표수와 서로소인 유한 $G_K$ [가군](modules.md) $M$ 에 대해, $M$ 의 **Cartier 쌍대(Cartier dual)** 는 $M^{\ast}=\mathrm{Hom}(M,\mu_{\char35{}M})$ 이다. $\mu_n$ 은 $1$ 의 $n$ 제곱근의 군이다.

$M=\mathbb Z/n$ 이면 $M^{\ast}=\mu_n$ 이고 $M=\mu_n$ 이면 $M^{\ast}=\mathbb Z/n$ 이다. 직관 절의 계수 $\pm1$ 은 $\mu_2=\mathbb Z/2$ 이므로 $M^{\ast}=M$ 이다. 타원곡선의 $E\lbrack m\rbrack$ 은 Weil 짝으로 $E\lbrack m\rbrack^{\ast}\cong E\lbrack m\rbrack$ 이다.

## 제한곱

$S$ 를 무한 자리, $\char35{}M$ 을 나누는 자리, $M$ 이 분기하는 자리를 포함하는 유한 집합이라 하자. **비분기 부분(unramified part)** 은 다음과 같다. $I_v$ 는 관성군이다.

$$
H^1_{\mathrm{ur}}(K_v,M)=\ker\bigl(H^1(K_v,M)\to H^1(I_v,M)\bigr)
$$

이에 대해 다음 군을 정한다.

$$
P^{i}(M)=\prod_v{}'\thinspace H^{i}(K_v,M)
$$

$P^i(M)$ 는 거의 모든 $v$ 에서 성분이 $H^i_{\mathrm{ur}}(K_v,M)$ 에 들어가는 원소들의 제한곱(restricted product)이다. $i=0$ 에서는 보통의 곱, $i=2$ 에서는 직합이 된다. 무한 자리에서는 Tate 수정 코호몰로지를 쓴다.

$M=\mu_2$, $K=\mathbb Q$ 이면 $P^1(M)$ 은 $(a_v)\in\prod_v\mathbb Q_v^\times/(\mathbb Q_v^\times)^2$ 가운데 거의 모든 $p$ 에서 $a_p$ 의 $p$ 진 위수가 짝수인 것들이다.

## Tate–Shafarevich 군

$$
\text{Ш}^{i}(K,M)=\ker\Bigl(H^{i}(K,M)\to\prod_vH^{i}(K_v,M)\Bigr)
$$

은 모든 자리에서 $0$ 이 되는 대역류의 군이다. $M=\mu_2$, $K=\mathbb Q$ 이면 $\text{Ш}^1$ 은 모든 $\mathbb Q_v$ 에서 제곱수인 유리수의 제곱류이고, 그런 유리수는 제곱수이므로 $\text{Ш}^1(\mathbb Q,\mu_2)=0$ 이다.

## Selmer 구조

자리마다 부분군 $L_v\subset H^1(K_v,M)$ 를 고르고 거의 모든 $v$ 에서 $L_v=H^1_{\mathrm{ur}}(K_v,M)$ 으로 한 것을 **Selmer 구조(Selmer structure)** $L=(L_v)$ 라 한다. 그 **Selmer 군** 과 **쌍대 구조(dual Selmer structure)** 는

$$
\mathrm{Sel}\_L(K,M)=\ker\Bigl(H^1(K,M)\to\prod_v\frac{H^1(K_v,M)}{L_v}\Bigr),\qquad
L^{\ast}\_v=\bigl(L_v\bigr)^{\perp}\subset H^1(K_v,M^{\ast})
$$

다. $\perp$ 는 아래 국소 Tate 짝에 대한 소멸자다. 타원곡선에서 $M=E\lbrack m\rbrack$, $L_v=\mathrm{im}\bigl(E(K_v)/mE(K_v)\bigr)$ 로 고르면 $\mathrm{Sel}\_L$ 이 $m$ Selmer 군이고, 이 $L$ 은 $L^{\ast}=L$ 을 만족한다. $M=\mu_2$, $K=\mathbb Q$ 에서 홀수 소수 $p$ 에서는 비분기, $2$ 에서는 $H^1$ 전체, $\infty$ 에서는 $0$ 인 조건을 고르면 Selmer 군은 양의 제곱 없는 수 가운데 모든 홀수 소수에서 위수가 짝수인 것, 곧 $\lbrace 1,2\rbrace$ 의 류다.

# 성질

## 국소 Tate 쌍대성

$K_v$ 가 국소체이면 컵곱과 불변량 사상

$$
H^{i}(K_v,M)\times H^{2-i}(K_v,M^{\ast})\xrightarrow{\cup}H^{2}(K_v,\mu_{\char35{}M})=\mathrm{Br}(K_v)\lbrack\char35{}M\rbrack\xrightarrow{\mathrm{inv}\_v}\tfrac1{\char35{}M}\mathbb Z/\mathbb Z
$$

이 $i=0,1,2$ 에서 완전 짝이다(국소 Tate 쌍대성, local Tate duality). $\mathrm{inv}\_v$ 는 [국소 유체론](local-class-field-theory.md)이 주는 [Brauer 군](brauer-groups.md)의 불변량이다. $M=\mu_2$ 이면 이 짝이 직관 절의 짝, 곧 Hilbert 기호(Hilbert symbol)다. 비아르키메데스 $v$ 에서 국소 Euler 표수 공식(local Euler characteristic formula)

$$
\frac{\char35{}H^{0}(K_v,M)\cdot\char35{}H^{2}(K_v,M)}{\char35{}H^{1}(K_v,M)}=\Vert\char35{}M\Vert_v
$$

이 성립한다. $v$ 가 $\char35{}M$ 을 나누지 않으면 오른쪽이 1 이고, $M$ 이 $v$ 에서 비분기이면 $\char35{}H^1_{\mathrm{ur}}=\char35{}H^0$ 이며 $H^1_{\mathrm{ur}}(K_v,M)$ 과 $H^1_{\mathrm{ur}}(K_v,M^{\ast})$ 은 서로의 소멸자다.

## Poitou–Tate 9 항 완전열

$K$ 가 수체이면 다음이 완전열이다. $(-)^{\vee}$ 는 [Pontryagin 쌍대](pontryagin-duality.md)다.

$$
\begin{aligned}
0\to\thinspace &H^0(K,M)\to P^0(M)\to H^2(K,M^{\ast})^{\vee}\cr
\to\thinspace &H^1(K,M)\to P^1(M)\to H^1(K,M^{\ast})^{\vee}\cr
\to\thinspace &H^2(K,M)\to P^2(M)\to H^0(K,M^{\ast})^{\vee}\to0
\end{aligned}
$$

$H^1(K,M)\to P^1(M)$ 의 상과 $H^1(K,M^{\ast})\to P^1(M^{\ast})$ 의 상은 국소 짝의 합에 대해 서로의 소멸자다. $M=M^{\ast}$ 이면 상은 자기 소멸자, 곧 Lagrangian 부분군이다.

$M=\mu_n$ 이면 $M^{\ast}=\mathbb Z/n$ 이고 마지막 세 항이 Brauer 군의 대역 열이 된다.

$$
0\longrightarrow \mathrm{Br}(K)\lbrack n\rbrack\longrightarrow\bigoplus_v\mathrm{Br}(K_v)\lbrack n\rbrack\xrightarrow{\sum\mathrm{inv}\_v}\tfrac1n\mathbb Z/\mathbb Z\longrightarrow0
$$

## 대역 상호법칙

$a\in H^1(K,M)$ 이고 $b\in H^1(K,M^{\ast})$ 이면

$$
\sum_v\mathrm{inv}\_v\bigl(\mathrm{loc}\_v(a)\cup\mathrm{loc}\_v(b)\bigr)=0
$$

이다. 두 류는 유한 개 자리를 뺀 모든 곳에서 비분기이고 그 자리들에서 짝이 $0$ 이므로 합은 유한합이다. 증명은 $\mathrm{loc}\_v(a)\cup\mathrm{loc}\_v(b)=\mathrm{loc}\_v(a\cup b)$ 와 $a\cup b\in\mathrm{Br}(K)\lbrack n\rbrack$ 에 Brauer 군의 대역 열을 쓴 것이다. $M=\mu_2$ 이면 Hilbert 상호법칙 $\prod_v(a,b)\_v=1$ 이다.

## Tate–Shafarevich 군의 쌍대성

완전열에서

$$
\text{Ш}^{1}(K,M)\thickspace\cong\thickspace\text{Ш}^{2}(K,M^{\ast})^{\vee},\qquad
\text{Ш}^{2}(K,M)\thickspace\cong\thickspace\text{Ш}^{1}(K,M^{\ast})^{\vee}
$$

가 나온다. $M=\mu_n$ 이면 $\text{Ш}^1(K,\mathbb Z/n)=0$ 이 [Chebotarev 밀도 정리](chebotarev.md)에서 나오므로 $\text{Ш}^2(K,\mu_n)=0$ 이고, 이것이 Brauer 군의 대역 열의 첫 단사다. 타원곡선 $E$ 의 $\text{Ш}(E/K)$ 가 유한할 때 위수가 제곱수라는 것은 이 쌍대성이 아니라 Cassels–Tate 짝(Cassels–Tate pairing)에서 나온다.

## Greenberg–Wiles 공식

Selmer 구조 $L$ 에 대해

$$
\frac{\char35{}\mathrm{Sel}\_{L}(K,M)}{\char35{}\mathrm{Sel}\_{L^{\ast}}(K,M^{\ast})}
=\frac{\char35{}H^{0}(K,M)}{\char35{}H^{0}(K,M^{\ast})}\prod_v\frac{\char35{}L_v}{\char35{}H^{0}(K_v,M)}
$$

이다(Greenberg–Wiles 공식, Greenberg–Wiles formula). 곱은 유한 개 자리를 빼면 1 이다. 두 Selmer 군은 대역적이라 직접 세기 어렵지만 그 비는 국소 계산으로 정해지므로, 하나의 크기를 다른 수단으로 정하면 나머지가 정해진다. 자기쌍대 $M$ 이고 $H^0(K,M)=0$ 이면 차원으로 쓴 식

$$
\dim\mathrm{Sel}\_{L}-\dim\mathrm{Sel}\_{L^{\ast}}=\sum_v\Bigl(\dim L_v-\dim H^{0}(K_v,M)\Bigr)
$$

이 직관 절의 $\dim L-\tfrac12\dim V$ 를 자리별로 적은 것이다.

## 대역 Euler 표수

$K_S$ 를 $S$ 밖에서 비분기인 최대 확대라 하면 Tate 의 대역 Euler 표수 공식(global Euler characteristic formula)

$$
\frac{\char35{}H^{0}(K_S/K,M)\cdot\char35{}H^{2}(K_S/K,M)}{\char35{}H^{1}(K_S/K,M)}=\prod_{v\mid\infty}\frac{\char35{}H^{0}(K_v,M)}{\Vert\char35{}M\Vert_v}
$$

이 성립한다. $\Vert\cdot\Vert_v$ 는 정규화된 절댓값이라 실수 자리에서 $\char35{}M$, 복소 자리에서 $(\char35{}M)^2$ 이다. $K=\mathbb Q$ 이면 오른쪽이 $\char35{}M^{+}/\char35{}M$ 이고 $M^+$ 는 복소켤레가 고정하는 부분이다. [Galois 표현의 변형환](deformation-rings.md)에서 $H^1$ 이 접공간이고 $H^2$ 가 장애공간이므로, 변형환 $R$ 에 대해 $R/pR$ 의 [Krull 차원](krull-dimension.md)이 $\dim H^1-\dim H^2$ 이상이고, 이 공식이 그 하한을 국소 자료로 준다.

## 자주 쓰는 국소 조건

$M=E\lbrack p\rbrack$ 이고 $v\nmid p$ 이며 $M$ 이 $v$ 에서 비분기인 경우다.

| 조건 | 정의 | 차원 | 소멸자 |
|---|---|---|---|
| 비분기 $H^1_{\mathrm{ur}}$ | $\ker\bigl(H^1(K_v,M)\to H^1(I_v,M)\bigr)$ | $\dim H^0(K_v,M)$ | 자기 자신 |
| 완화 | $H^1(K_v,M)$ 전체 | $2\dim H^0(K_v,M)$ | $0$ |
| 강화 | $0$ | $0$ | 전체 |
| 가로지름 $H^1_{\mathrm{tr}}$ | 비분기 부분의 보충 | $\dim H^0(K_v,M)$ | 자기 자신 |

완화(relaxed), 강화(strict), 가로지름(transverse) 조건 가운데 가로지름 조건은 $v$ 가 Kolyvagin 소수일 때 정의된다. 비분기와 가로지름은 둘 다 자기 소멸자이고, 하나를 다른 하나로 바꾸면 $\dim L$ 은 그대로이고 $\mathrm{Sel}\_L$ 은 다른 군이 된다. Kolyvagin 유도류는 비분기 조건을 가로지름 조건으로 바꾼 Selmer 군에 속한다.

## 한 자리의 완화

$L'$ 을 $\ell$ 에서만 $H^1(K_\ell,M)$ 전체로 바꾼 구조라 하면 $(L')^{\ast}$ 는 $\ell$ 에서 강화 조건이고,

$$
0\to\mathrm{Sel}\_L\to\mathrm{Sel}\_{L'}\xrightarrow{\partial_\ell}H^1(K_\ell,M)/H^1_{\mathrm{ur}}(K_\ell,M)
$$

이 완전하다. 상호법칙으로 $\partial_\ell$ 의 상이 정해진다.

$$
\mathrm{im}\thinspace\partial_\ell=\bigl(\mathrm{loc}\_\ell\thinspace\mathrm{Sel}\_{L^{\ast}}\bigr)^{\perp}
$$

$H^1_{\mathrm{ur}}(K_\ell,M)$ 이 1 차원이면 $\dim\mathrm{Sel}\_{L'}-\dim\mathrm{Sel}\_{L}$ 과 $\dim\mathrm{Sel}\_{L^{\ast}}-\dim\mathrm{Sel}\_{(L')^{\ast}}$ 은 각각 $0$ 이나 $1$ 이고 합이 $1$ 이다. 쌍대 Selmer 군에 $\mathrm{loc}\_\ell$ 이 $0$ 이 아닌 원소가 있으면 Selmer 군은 그대로이고 쌍대 Selmer 군의 차원이 1 줄어든다. 그런 $\ell$ 은 Chebotarev 밀도 정리로 존재한다. Kolyvagin 소수와 Taylor–Wiles 소수는 이 선택으로 고른 소수다.

# 활용

## 하강과 Selmer 군의 크기

$M=E\lbrack m\rbrack$ 과 $L_v=\mathrm{im}\bigl(E(K_v)/mE(K_v)\bigr)$ 에서 $L=L^{\ast}$ 이므로 Greenberg–Wiles 공식의 좌변이 1 이고, 국소 항의 곱이 1 이라는 등식이 나온다.

$$
\prod_v\frac{\char35{}E(K_v)/mE(K_v)}{\char35{}E(K_v)\lbrack m\rbrack}=1
$$

$v\nmid m\infty$ 이고 $E$ 가 $v$ 에서 좋은 환원을 가지면 분자와 분모가 같으므로, 이 등식은 $m$ 을 나누는 자리, 무한 자리, 나쁜 환원 자리의 국소 항 사이의 관계다. $m$ 하강에서 국소 조건 $L_v$ 를 계산할 때 이 등식으로 계산을 검산한다.

## 변형환의 접공간과 Taylor–Wiles 소수

변형환의 접공간은 국소 조건을 단 Selmer 군 $H^1_{\mathcal L}(K,\mathrm{ad}\thinspace\bar\rho)$ 이다. Greenberg–Wiles 공식을 $\mathrm{ad}\thinspace\bar\rho$ 에 쓰면 $\dim H^1_{\mathcal L}-\dim H^1_{\mathcal L^{\ast}}$ 이 국소 항의 합으로 정해진다.

Taylor–Wiles 방법은 $q\equiv1\pmod{p^{n}}$ 인 보조 소수를 $r=\dim H^1_{\mathcal L^{\ast}}$ 개 골라 그 자리들에서 조건을 완화한다. 한 자리의 완화에 따라 자리마다 쌍대 Selmer 군의 차원이 1 줄어 $r$ 번 뒤에 $0$ 이 되고, 접공간의 차원이 $n$ 과 무관하게 국소 항만으로 정해진다. 이것이 패칭(patching)에 쓰인다.

## Euler 계 논법

[Euler 계](euler-systems.md)의 Kolyvagin 유도류 $\kappa_n$ 은 $n$ 의 소인수 밖에서 Selmer 조건을 만족한다. 쌍대 Selmer 군의 원소 $s$ 와의 상호법칙 합에서는 $n$ 의 소인수 자리 항만 남고, 그 합이 $0$ 이라는 등식이 $\mathrm{loc}\_\ell(s)$ 에 조건을 준다. 이 조건을 여러 $\ell$ 에 대해 모아 쌍대 Selmer 군의 크기에 상계를 얻는다.

## Hasse 원리

$\text{Ш}^1(K,M)$ 은 대역류에 대한 [Hasse 원리](hasse-principle.md)가 실패하는 정도이고, Tate–Shafarevich 군의 쌍대성은 $\text{Ш}^{2}(K,M)$ 의 계산을 $\text{Ш}^{1}(K,M^{\ast})$ 의 계산으로 바꾼다. $M=\mu_n$ 에서 이 바꿈이 Brauer 군의 Hasse 원리 $\text{Ш}^2(K,\mu_n)=0$ 을 준다.

[^1]: 표준 참고는 J. Neukirch, A. Schmidt, K. Wingberg, *Cohomology of Number Fields* (2판, Springer 2008) 8 장, 그리고 J. S. Milne, *Arithmetic Duality Theorems* (2판, 2006) I 장. Greenberg–Wiles 공식은 A. Wiles, *Modular elliptic curves and Fermat's Last Theorem*, Ann. of Math. **141** (1995) 의 명제 1.6 과 R. Greenberg 의 Iwasawa 이론 강의록에 있다. 입문은 B. Mazur, K. Rubin, *Kolyvagin Systems* (Memoirs AMS 168, 2004) 2 장. 자기쌍대 국소 짝과 극대 등방 부분공간은 B. Poonen, E. Rains, *Self cup products and the theta characteristic torsor*, Math. Res. Lett. **18** (2011).

# 연관 문서

## 선수지식

- [Selmer 군과 Tate–Shafarevich 군](selmer-tate-shafarevich.md)
- [국소 유체론](local-class-field-theory.md)

## 더 알아보기

- [Euler 계](euler-systems.md)
- [Galois 표현의 변형환](deformation-rings.md)

#number_theory #theorem #algebra
