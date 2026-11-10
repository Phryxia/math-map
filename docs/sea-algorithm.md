# Schoof–Elkies–Atkin 알고리즘

# 개요

**Schoof–Elkies–Atkin 알고리즘(Schoof–Elkies–Atkin algorithm, SEA)** 은 유한체 $\mathbb F_p$ 위 [타원곡선](elliptic-curves.md)의 점을 하나씩 대입하지 않고 그 개수를 세는 알고리즘이다. $p=5$ 에서 $y^2=x^3+x+1$ 은 $x$ 에 다섯 값을 넣어 보면 무한원점까지 점이 $9$ 개임을 알 수 있지만, 암호에 쓰는 $p$ 는 $2^{256}$ 규모라 이렇게 셀 수 없다. 알고리즘은 점의 개수를 작은 소수 $\ell=2,3,5,\dots$ 로 나눈 나머지를 하나씩 구하고, [중국인의 나머지 정리](chinese-remainder-theorem.md)로 이 나머지들을 모아 개수를 확정한다.

# 직관

$E:y^2=x^3+x+1$, $p=5$ 로 시작한다. 점의 개수를 $p+1-a_p$ 로 적으면 $a_5=6-9=-3$ 이다. $a_p$ 는 $-2\sqrt p$ 와 $2\sqrt p$ 사이의 정수이므로 $p=5$ 에서는 $-4$ 부터 $4$ 까지 아홉 값 가운데 하나다. 그래서 $a_5$ 를 $9$ 보다 큰 어떤 수로 나눈 나머지만 알면 $a_5$ 가 정해진다.

$a_5$ 를 $2$ 로 나눈 나머지는 점을 다 세지 않고 얻는다. 점 $(x,y)$ 와 $(x,-y)$ 는 짝을 이루므로, 짝이 없는 점은 무한원점과 $y=0$ 인 점이다. $x^3+x+1$ 은 $x=0,1,2,3,4$ 에서 $1,3,1,1,4$ 이고 $5$ 의 배수가 없으므로 $y=0$ 인 점이 없다. 점의 개수가 홀수이고 $a_5=6-(\text{홀수})$ 도 홀수다.

$y=0$ 인 점은 두 번 더하면 무한원점이 되는 점이다. 같은 방법으로 $\ell$ 번 더하면 무한원점이 되는 점들을 보면 $a_p$ 를 $\ell$ 로 나눈 나머지가 나온다. 이 점들의 좌표는 $\mathbb F_p$ 의 큰 확대체에 있어서 직접 구하면 비용이 크다. 그 $x$ 좌표가 근이 되는 다항식을 하나 만들고, 그 다항식으로 나눈 나머지끼리만 계산하면 점을 구하지 않아도 된다.

$\ell$ 은 곱이 $4\sqrt p$ 를 넘을 때까지만 늘리면 되므로 $\log p$ 규모에서 멈춘다. Schoof 가 1985 년에 이 방법을 냈고[^1], Elkies 와 Atkin 이 다항식의 차수를 줄인 판을 더해 Schoof–Elkies–Atkin 알고리즘이 되었다.

# 정의

## Frobenius 자기준동형

$E/\mathbb F_p$ 에 대해 $\varphi(x,y)=(x^p,y^p)$ 를 **Frobenius 자기준동형(Frobenius endomorphism)** 이라 한다. $\mathrm{End}(E)$ 안에서 다음 특성방정식이 성립한다.

$$
\varphi^2-a_p\thinspace\varphi+p=0,\qquad a_p=p+1-\char35{}E(\mathbb F_p)
$$

$\varphi$ 의 고정점이 정확히 $E(\mathbb F_p)$ 이므로 $\char35{}E(\mathbb F_p)=\deg(\varphi-1)=p+1-a_p$ 다. Hasse 정리(Hasse's theorem)가 $\vert a_p\vert\le 2\sqrt p$ 를 준다. 직관 절의 곡선에서는 $\varphi^2+3\varphi+5=0$ 이다.

## 등분점

$\ell P=O$ 인 점 $P$ 를 **$\ell$ 등분점($\ell$-torsion point)** 이라 하고, $\overline{\mathbb F}\_p$ 위의 $\ell$ 등분점 전체를 $E\lbrack\ell\rbrack$ 로 적는다. $\ell\ne p$ 이면 $E\lbrack\ell\rbrack\cong(\mathbb Z/\ell)^2$ 다. 직관 절의 $y=0$ 인 점이 $2$ 등분점이고, $y^2=x^3+x+1$ 의 $E\lbrack 2\rbrack$ 는 무한원점과 $x^3+x+1$ 의 세 근 $(x_i,0)$ 이다. 그 세 근은 $\mathbb F_5$ 에 없고 $\mathbb F_{125}$ 에 있다.

## 나눗셈 다항식

$E:y^2=x^3+Ax+B$ 에 대해 **나눗셈 다항식(division polynomial)** $\psi_n\in\mathbb Z\lbrack A,B,x,y\rbrack$ 을 다음으로 정의한다.

$$
\psi_1=1,\quad\psi_2=2y,\quad\psi_3=3x^4+6Ax^2+12Bx-A^2,
$$

$$
\psi_4=4y\big(x^6+5Ax^4+20Bx^3-5A^2x^2-4ABx-8B^2-A^3\big)
$$

$n\ge2$ 에서는 다음 점화식으로 정한다.

$$
\psi_{2n+1}=\psi_{n+2}\psi_n^3-\psi_{n-1}\psi_{n+1}^3,
\qquad
\psi_{2n}=\frac{\psi_n}{2y}\big(\psi_{n+2}\psi_{n-1}^2-\psi_{n-2}\psi_{n+1}^2\big)
$$

$\psi_2=2y$ 의 영점은 직관 절의 $y=0$ 인 점이다. $A=B=1$, $p=5$ 이면 $\psi_3\equiv 3x^4+x^2+2x+4\pmod 5$ 이고, 그 근이 $3$ 등분점의 $x$ 좌표다.

## 모듈러 다항식

**모듈러 다항식(modular polynomial)** $\Phi_\ell(X,Y)\in\mathbb Z\lbrack X,Y\rbrack$ 은 $j(\tau)$ 와 $j(\ell\tau)$ 가 만족하는 대수관계이고, [모듈러 곡선](modular-curves.md) $X_0(\ell)$ 의 평면 모델을 준다. $X$ 와 $Y$ 각각에 대해 차수가 $\ell+1$ 이다.

$\Phi_\ell(j(E),Y)$ 가 $\mathbb F_p$ 에서 근을 가지면 $\ell$ 을 **Elkies 소수(Elkies prime)**, 근이 없으면 **Atkin 소수(Atkin prime)** 라 한다.

## 알고리즘

1. $\prod_{\ell\in S}\ell\gt 4\sqrt p$ 가 되도록 $p$ 와 다른 작은 소수의 집합 $S$ 를 잡는다.
2. 각 $\ell\in S$ 에서 $t_\ell=a_p\bmod\ell$ 을 구한다.
   - Schoof 단계. 몫환 $R=\mathbb F_p\lbrack x,y\rbrack\big/\big(\psi_\ell(x),\thinspace y^2-f(x)\big)$ 에서 $(x^{p^2},y^{p^2})+p(x,y)=t(x^p,y^p)$ 를 $t=0,\dots,\ell-1$ 마다 시험한다.
   - Elkies 단계. $\Phi_\ell(j(E),Y)$ 에 근이 있으면 $\psi_\ell$ 의 차수 $(\ell-1)/2$ 인 인수 $g_\ell$ 을 만들고, $\mathbb F_p\lbrack x\rbrack/(g_\ell)$ 에서 [고윳값](eigenvalues.md) $\lambda$ 를 찾아 $t_\ell\equiv\lambda+p/\lambda$ 로 얻는다.
   - Atkin 단계. 근이 없으면 $\Phi_\ell(j(E),Y)$ 의 인수분해 꼴에서 $t_\ell$ 의 후보 집합을 얻고, 마지막에 [Baby-step giant-step 알고리즘](baby-step-giant-step.md)으로 후보의 조합을 고른다.
3. 중국인의 나머지 정리(Chinese remainder theorem, CRT)로 $a_p\bmod\prod\ell$ 을 얻고, Hasse 정리의 구간에서 정수 $a_p$ 를 고른다.

$R$ 은 $\psi_\ell$ 이 기약이 아니면 체가 아니지만, 2 단계의 항등식은 $E\lbrack\ell\rbrack$ 전체에서 성립하는지만 보므로 $R$ 에서 계산해도 된다. Schoof 판의 비용은 $\tilde O(\log^5p)$ 이고 Elkies–Atkin 판은 $\tilde O(\log^4p)$ 다.

# 성질

## 대각합과 행렬식

$\ell\ne p$ 인 소수에 대해 $\varphi$ 는 $E\lbrack\ell\rbrack\cong(\mathbb Z/\ell)^2$ 위의 $\mathbb F_\ell$ [선형사상](linear-maps.md)이고 다음을 만족한다.

$$
\mathrm{tr}\thinspace\varphi\equiv a_p\pmod\ell,\qquad\det\varphi\equiv p\pmod\ell
$$

이 [행렬](matrices.md)은 [Galois 표현](galois-representations.md) $\rho_{E,\ell}$ 의 Frobenius 에서의 값이다. 알고리즘의 2 단계는 이 행렬의 대각합을 행렬을 만들지 않고 구하는 것이다. [행렬식](determinants.md)은 검산에 쓴다.

## 나눗셈 다항식의 성질

- $\ell$ 이 홀수 소수이면 $\psi_\ell$ 은 $x$ 만의 다항식이고 차수가 $(\ell^2-1)/2$ 다. $0$ 이 아닌 $\ell$ 등분점 $\ell^2-1$ 개가 $\pm P$ 로 짝지어지므로 $x$ 좌표가 $(\ell^2-1)/2$ 개다.
- $P=(x_0,y_0)\ne O$ 에 대해 $\ell P=O$ 와 $\psi_\ell(x_0)=0$ 은 동치다.
- 곱셈사상이 $\psi$ 로 표현된다.

$$
nP=\left(x-\frac{\psi_{n-1}\psi_{n+1}}{\psi_n^2},\ \frac{\psi_{2n}}{2\psi_n^4}\right)
$$

## Elkies 소수의 판정

$\Phi_\ell(j_1,j_2)=0$ 은 $j$ 불변량이 $j_1,j_2$ 인 두 타원곡선 사이에 차수 $\ell$ 의 순환 동종사상(cyclic isogeny)이 있다는 것과 동치다. $\mathbb F_p$ 에서 $\Phi_\ell(j(E),Y)$ 의 근의 개수는 $0,1,2,\ell+1$ 가운데 하나다. 근이 있다는 것은 판별식 $a_p^2-4p$ 가 $\bmod\ell$ 에서 제곱이라는 것과 동치이고, 그때 $E\lbrack\ell\rbrack$ 안에 $\varphi$ 가 보존하는 $1$ 차원 부분군이 있다. 그 부분군의 $x$ 좌표가 $g_\ell$ 의 근이다.

## ℓ = p 의 제외

$E\lbrack p\rbrack$ 는 $(\mathbb Z/p)^2$ 가 아니다. 보통 곡선이면 $\mathbb Z/p$ 이고 초특이 곡선이면 자명군이다. 이 구분이 [Newton 다각형](newton-polygon.md)의 보통과 초특이 구분에 대응한다.

## 필요한 소수의 개수

$\prod_{\ell\in S}\ell\gt 4\sqrt p$ 이면 충분하다. [Chebyshev 추정](chebyshev-bounds.md)으로 $\prod_{\ell\le L}\ell=e^{(1+o(1))L}$ 이므로 $L\approx\log(4\sqrt p)\approx\tfrac12\log p$ 이면 된다. $p=2^{61}-1$ 이면 $4\sqrt p\approx 6.07\times10^9$ 이고, $23$ 까지의 소수의 곱 $2.2\times10^8$ 은 모자라고 $29$ 까지의 곱 $6.47\times10^9$ 이 넘는다.

## Kedlaya 알고리즘과의 비교

| | Schoof–Elkies–Atkin | Kedlaya |
|---|---|---|
| 정보를 모으는 축 | 여러 소수 $\ell$ 의 잉여 | 하나의 소수 $p$ 의 정밀도 |
| 쓰는 [코호몰로지](cohomology.md) | $\ell$ 진 (등분점) | $p$ 진 (Monsky–Washnitzer) |
| 비용 | $\log p$ 의 다항식 | $p$ 에 선형 |
| 쓰는 영역 | 종수 1 과 큰 $p$ | 임의 종수와 작은 $p$ 와 큰 확대 |
| 확정하는 근거 | CRT 와 Hasse 정리 | $p$ 진 정밀도와 Weil 한계 |

[Kedlaya 알고리즘](kedlaya-algorithm.md)도 답이 크기를 아는 정수라는 것을 써서 잉여에서 답을 확정한다. 종수 2 이상의 $\ell$ 진 방법으로 Gaudry–Schost 의 일반화가 있다.

# 활용

## Frobenius 행렬의 예

$y^2=x^3+x+1$, $p=5$ 에서 $a_5=-3$ 이다.

- $\ell=2$. 특성다항식 $x^2-a_5x+5$ 는 $\bmod 2$ 에서 $x^2+x+1$ 이고 근이 없다. $\varphi$ 는 $x^3+x+1$ 의 세 근을 순환시키는 위수 $3$ 의 행렬 $\begin{pmatrix}0&1\cr 1&1\end{pmatrix}$ 이고, 대각합 $1$ 과 행렬식 $-1\equiv 1$ 이 $a_5\bmod 2$ 와 $5\bmod 2$ 에 맞는다.
- $\ell=3$. 특성다항식은 $\bmod 3$ 에서 $x^2+2=(x-1)(x-2)$ 이므로 적당한 기저에서 $\varphi=\mathrm{diag}(1,2)$ 다. 대각합 $0$ 과 행렬식 $2$ 가 $a_5\bmod 3$ 과 $5\bmod 3$ 에 맞는다.
- $\ell=7$. 특성다항식 $x^2-4x+5$ 의 판별식 $3$ 이 $\bmod 7$ 의 제곱이 아니므로 $7$ 은 Atkin 소수다. 행렬식 $5$ 의 $\bmod 7$ 위수가 $6$ 이므로 $\varphi$ 의 위수는 $6$ 의 배수이고, $E\lbrack 7\rbrack$ 은 차수가 $6$ 의 배수인 확대체에서야 정의된다. 이 경우 등분점을 구하지 않고 나눗셈 다항식의 몫환에서 계산한다.

## 중국인의 나머지 정리의 종료

$\ell=5$ 는 $p$ 와 같아 쓰지 않는다. $\ell=2,3$ 만으로는 $\prod\ell=6\lt 4\sqrt5\approx 8.94$ 라 $a_5\equiv 3\pmod 6$ 의 후보가 $-3$ 과 $3$ 둘이다. $\ell=7$ 에서 $a_5\equiv 4\pmod 7$ 이 더해지면 $a_5=-3$ 으로 확정된다.

## 곡선 암호

- 곡선 선택. 무작위 곡선을 뽑아 위수를 세고, 위수가 소수이거나 작은 보조인자만 갖는지 확인한다. 위수가 작은 소인수로 쪼개지면 [Pohlig–Hellman 방법](pohlig-hellman.md)으로 [이산로그](discrete-logarithm.md)가 빨리 풀린다. NIST(National Institute of Standards and Technology) P-256, secp256k1 같은 표준 곡선의 위수도 이 계열 알고리즘으로 검증한다.
- 안전성 조건. $\char35{}E(\mathbb F_p)=p$ 인 **비정상 곡선(anomalous curve)** 은 이산로그가 다항식 시간에 풀린다. $\char35{}E$ 가 작은 $k$ 에서 $p^k-1$ 을 나누면 MOV(Menezes–Okamoto–Vanstone) 공격으로 [유한체](finite-fields.md)의 이산로그로 환원된다. 위수를 알아야 이 조건들을 검사할 수 있다.

## 수론의 계산

- 대량의 $a_p$ 표가 [Sato–Tate 분포](sato-tate.md)와 [Birch–Swinnerton-Dyer 추측](birch-swinnerton-dyer.md)(Birch–Swinnerton-Dyer conjecture, BSD)의 수치 검증에 쓰이고, 큰 $p$ 영역의 표를 SEA 가 만든다.
- $\rho_{E,\ell}$ 의 상이 $\mathrm{GL}\_2(\mathbb F_\ell)$ 전체인지 판정할 때 $E\lbrack\ell\rbrack$ 위 $\varphi$ 의 행렬을 쓴다.

[^1]: R. Schoof, *Elliptic curves over finite fields and the computation of square roots mod p*, Math. Comp. **44** (1985), 483–494, 그리고 *Counting points on elliptic curves over finite fields*, J. Théor. Nombres Bordeaux **7** (1995), 219–254. Elkies–Atkin 개선의 표준 서술은 R. Lercier, F. Morain 의 논문들과 I. Blake, G. Seroussi, N. Smart, *Elliptic Curves in Cryptography* (1999) VII장. 나눗셈 다항식과 Hasse 정리는 J. Silverman, *The Arithmetic of Elliptic Curves* (2판, 2009) III, V장. 모듈러 다항식과 $X_0(\ell)$ 의 모듈러 해석은 F. Diamond, J. Shurman, *A First Course in Modular Forms* (2005) 8장.

# 연관 문서

## 선수지식

- [모듈러 곡선](modular-curves.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #algorithms #cryptography #computation
