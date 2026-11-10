# 모듈러 기호

# 개요

**모듈러 기호(modular symbol)** $\lbrace\alpha,\beta\rbrace$ 는 상반평면에서 두 첨점 $\alpha,\beta$ 를 잇는 [측지선](geodesics.md)이 정하는 상대 호몰로지류다. 레벨 $11$ 의 무게 $2$ 첨점형식 $q\prod_n(1-q^n)^2(1-q^{11n})^2$ 의 계수는 무한곱을 전개해 하나씩 구해야 하고, 레벨이 커지면 첨점형식 공간의 기저조차 손으로 얻을 수 없다. 모듈러 기호는 첨점형식 대신 그것을 적분할 경로를 다뤄, [Hecke 작용소](hecke-operators.md)를 유한 크기의 정수 [행렬](matrices.md)로 계산하게 한다.

# 직관

준위 $11$ 의 무게 $2$ 첨점형식 $f=q\prod_n(1-q^n)^2(1-q^{11n})^2$ 의 $L(f,1)$ 이나 [Hecke 작용소](hecke-operators.md)의 [고윳값](eigenvalues.md)을 구하려 한다. $q$ 전개에서 직접 구하려면 무한곱을 많은 항까지 펼쳐야 하고, 준위가 커지면 첨점형식 공간의 기저부터 손으로 얻을 수 없다.

$f(z)\thinspace dz$ 는 $\Gamma_0(11)$ 의 변환에서 바뀌지 않으므로, $f$ 를 두 첨점 사이의 경로를 따라 적분한 값은 경로를 연속적으로 움직여도, $\Gamma_0(11)$ 로 옮겨도 같다. $L(f,1)$ 도 $0$ 에서 $i\infty$ 까지의 적분이다. 그래서 함수 $f$ 대신 첨점을 잇는 경로를 다룬다.

경로는 유한 종류의 조각으로 쪼개진다. $0$ 에서 $2/5$ 로 가는 경로는 [연분수](continued-fractions.md) 수렴분 $0/1,1/2,2/5$ 를 거쳐 $\lbrace 0,1/2\rbrace+\lbrace 1/2,2/5\rbrace$ 로 나뉘고, 각 조각의 양 끝 $b/d$, $a/c$ 는 $ad-bc=\pm1$ 을 만족한다. 그런 조각은 $\mathrm{SL}\_2(\mathbb Z)$ 의 원소 $g$ 로 $\lbrace g\cdot 0,g\cdot\infty\rbrace$ 꼴이고, $\Gamma_0(11)$ 로 옮겨도 같으므로 $g$ 는 잉여류로만 기억하면 된다. 잉여류가 $12$ 개뿐이므로 경로 전체가 유한 개의 생성원과 관계식으로 적히고, Hecke 고윳값이 정수 [행렬](matrices.md)의 고윳값 계산이 된다.

# 정의

## 모듈러 기호 공간

$\alpha,\beta\in\mathbb P^1(\mathbb Q)$ 인 기호 $\lbrace\alpha,\beta\rbrace$ 가 생성하는 자유아벨군을 관계

$$
\lbrace\alpha,\beta\rbrace+\lbrace\beta,\gamma\rbrace+\lbrace\gamma,\alpha\rbrace=0
$$

으로 나눈 군을 $\mathbb M_2$ 라 한다. 이 관계에서 $\lbrace\alpha,\alpha\rbrace=0$ 과 $\lbrace\alpha,\beta\rbrace=-\lbrace\beta,\alpha\rbrace$ 가 나온다. $\mathrm{SL}\_2(\mathbb Z)$ 가 $g\lbrace\alpha,\beta\rbrace=\lbrace g\alpha,g\beta\rbrace$ 로 작용하고, $\Gamma=\Gamma_0(N)$ 에 대해 $g x-x$ 꼴 원소로 나눈 군

$$
\mathbb M_2(\Gamma)=\big(\mathbb M_2\big)\_\Gamma
$$

을 $\Gamma$ 의 **모듈러 기호 공간(space of modular symbols)** 이라 한다. 직관 절의 분해 $\lbrace 0,2/5\rbrace=\lbrace 0,1/2\rbrace+\lbrace 1/2,2/5\rbrace$ 는 $\mathbb M_2$ 의 관계식이다.

경계 사상 $\partial\lbrace\alpha,\beta\rbrace=(\beta)-(\alpha)$ 는 $\mathbb M_2(\Gamma)$ 에서 첨점들의 형식 합의 군으로 간다. 그 핵 $\mathbb S_2(\Gamma)$ 를 **첨점 모듈러 기호(cuspidal modular symbols)** 라 한다. $\lbrace 0,\infty\rbrace$ 는 $\partial\lbrace 0,\infty\rbrace=(\infty)-(0)$ 이고, $N$ 이 소수이면 첨점 $0$ 과 $\infty$ 가 다르므로 첨점 모듈러 기호가 아니다.

## Manin 기호

$\Gamma_0(N)$ 의 잉여류를 왼쪽 열을 읽어 $\mathbb P^1(\mathbb Z/N)$ 과 대응시킨다.

$$
\Gamma_0(N)\backslash\mathrm{SL}\_2(\mathbb Z)\ \xrightarrow{\ \sim\ }\ \mathbb P^1(\mathbb Z/N),\qquad
\begin{pmatrix}a&b\cr c&d\end{pmatrix}\longmapsto(c:d)
$$

$x=(c:d)$ 에 대응하는 $g$ 를 잡아 $[x]=\lbrace g\cdot0,\thinspace g\cdot\infty\rbrace\in\mathbb M_2(\Gamma_0(N))$ 을 **Manin 기호(Manin symbol)** 라 한다. $x=(0:1)$ 이면 $g=I$ 이고 $[x]=\lbrace 0,\infty\rbrace$ 다. $x=(1:0)$ 이면 $g=\begin{pmatrix}0&-1\cr 1&0\end{pmatrix}$ 이고 $[x]=\lbrace\infty,0\rbrace$ 다. $\mathbb P^1(\mathbb Z/N)$ 의 원소 수는 $N\prod_{p\mid N}(1+1/p)$ 이므로 $N=11$ 이면 Manin 기호가 $12$ 개다.

## Hecke 작용소

$p\nmid N$ 일 때 모듈러 기호 위의 Hecke 작용소를

$$
T_p\lbrace\alpha,\beta\rbrace=\Big\lbrace p\alpha,p\beta\Big\rbrace+\sum_{r=0}^{p-1}\Big\lbrace\frac{\alpha+r}{p},\frac{\beta+r}{p}\Big\rbrace
$$

로 정한다. 행렬 $\begin{pmatrix}p&0\cr 0&1\end{pmatrix}$ 과 $\begin{pmatrix}1&r\cr 0&p\end{pmatrix}$ 가 기호에 작용한 것을 더한 것이다. $T_2\lbrace 0,\infty\rbrace=\lbrace 0,\infty\rbrace+\lbrace 0,\infty\rbrace+\lbrace 1/2,\infty\rbrace$ 다.

## 무게 k 확장

무게 $k\gt 2$ 에서는 계수를 가군으로 바꾼다. $V_{k-2}=\mathrm{Sym}^{k-2}(\mathbb Z^2)$ 를 $\mathrm{SL}\_2$ 표현으로 두고 기호를 $P\in V_{k-2}$ 에 대한 $P\otimes\lbrace\alpha,\beta\rbrace$ 로 확장하면 같은 이론이 작동한다. $k=2$ 는 $V_0=\mathbb Z$ 인 경우다.

# 성질

## Manin 의 정리

$\mathrm{SL}\_2(\mathbb Z)$ 는 $\mathbb P^1(\mathbb Z/N)$ 에 행벡터 우곱 $(c,d)\mapsto(c,d)M$ 으로 작용한다. Manin 기호들은 $\mathbb M_2(\Gamma_0(N))$ 을 생성하고, 관계식은 다음 둘로 충분하다.[^1]

$$
\mathbb M_2(\Gamma_0(N))\thickspace\cong\thickspace\frac{\bigoplus_{x\in\mathbb P^1(\mathbb Z/N)}\mathbb Z\lbrack x\rbrack}{\big(\lbrack x\rbrack+\lbrack x\sigma\rbrack,\thinspace \lbrack x\rbrack+\lbrack x\tau\rbrack+\lbrack x\tau^2\rbrack\big)}
$$

여기서 $\sigma=\begin{pmatrix}0&-1\cr 1&0\end{pmatrix}$, $\tau=\begin{pmatrix}0&-1\cr 1&-1\end{pmatrix}$ 이고 $\sigma^2=-I$, $\tau^3=I$ 다. 첫 관계식은 경로 뒤집기 $\lbrace0,\infty\rbrace=-\lbrace\infty,0\rbrace$ 이고, 둘째는 삼각 관계 $\lbrace0,\infty\rbrace+\lbrace\infty,1\rbrace+\lbrace 1,0\rbrace=0$ 이다. 연분수 분해가 생성을 보이고, $\mathrm{PSL}\_2(\mathbb Z)$ 가 $\sigma$ 와 $\tau$ 의 상이 생성하는 위수 $2$ 와 위수 $3$ 인 군의 자유곱이라는 사실이 관계식이 이 둘로 충분함을 보인다.

$T_p$ 의 각 항은 [행렬식](determinants.md)이 $p$ 인 행렬이어서 Manin 기호로 바로 적히지 않는다. Merel 의 Heilbronn 행렬이 이 환원을 한 번에 해, $T_p$ 가 Manin 기호 위의 정수 행렬로 나온다.

## 비교 정리

Eichler–Shimura 동형(Eichler–Shimura isomorphism)은 [복소수](complex-numbers.md) 계수에서 다음을 준다.

$$
\mathbb S_k(\Gamma)\otimes\mathbb C\thickspace\cong\thickspace S_k(\Gamma)\oplus\overline{S_k(\Gamma)}
$$

$\mathbb M_k$ 전체로 가면 Eisenstein 부분이 더해진다. $k=2$ 에서 차원은 다음이고 $\dim S_2(\Gamma_0(N))=g$ 와 맞는다. $c$ 는 첨점의 수다.

$$
\dim_{\mathbb Q}\mathbb M_2(\Gamma_0(N))=2g+c-1,\qquad
\dim_{\mathbb Q}\mathbb S_2(\Gamma_0(N))=2g
$$

이 동형이 Hecke 작용과 호환되므로 모듈러 기호 위의 정수 행렬 $T_p$ 의 고유다항식이 [모듈러 형식](modular-forms.md)의 Hecke 고윳값을 준다.

## 복소켤레와 ± 분해

$\eta=\begin{pmatrix}-1&0\cr 0&1\end{pmatrix}$ 가 $\mathbb M_k$ 에 대합으로 작용하고 이것이 $X_0(N)(\mathbb C)$ 위의 복소켤레에 해당한다. 고유공간으로 나누면

$$
\mathbb M_k=\mathbb M_k^+\oplus\mathbb M_k^-
$$

이고 각 조각의 차원이 절반이다. Hecke 고윳값은 두 조각에서 같으므로 실제 계산은 $+$ 쪽에서만 해 차원을 절반으로 줄인다.

## L 값과의 짝

$f$ 가 무게 2 새형식일 때 기호 $\lbrace 0,\infty\rbrace$ 와의 짝이 $L$ 값이다.

$$
\langle\lbrace 0,\infty\rbrace,f\rangle=\int_0^{i\infty}2\pi i\thinspace f(z)\thinspace dz=-L(f,1)
$$

$\lbrace 0,\alpha\rbrace$ 꼴 기호가 꼬인 $L$ 값 $L(f,\chi,1)$ 을 주고, 무게 $k$ 에서는 $V_{k-2}$ 의 성분이 $1\le j\le k-1$ 인 임계점 $L(f,j)$ 를 준다. 이 값들은 주기 $\Omega_f^\pm$ 로 나누면 유리수이고 그 유리수가 모듈러 기호 격자에서 직접 읽힌다. [Birch–Swinnerton-Dyer 추측](birch-swinnerton-dyer.md)(BSD)의 수치 검증이 이 성질 위에서 이루어진다.

## 정수 구조

모듈러 기호는 $\mathbb Z$ 격자이고 그 격자가 $S_2$ 의 $\mathbb C$ 벡터공간보다 많은 정보를 담는다. 새형식 $f$ 에 붙는 타원곡선 $E_f$ 의 Manin 상수, 주기 격자, Tamagawa 수가 이 격자에서 나온다.

# 활용

## 관계식만으로 계산하는 차원

생성원 $\mathbb P^1(\mathbb Z/N)$ 과 두 관계식으로 $\dim\mathbb M_2(\Gamma_0(N))$ 를 구해 알려진 종수·첨점 수와 대조한다.

$\mathbb P^1(\mathbb Z/N)$ 위의 두 치환과 Gauss 소거만으로 $X_0(N)$ 의 종수가 나온다. $N=11$ 이면 생성원 $12$ 개에 관계식을 넣어 $\dim\mathbb M_2=3=2g+c-1$ 을 얻고 $g=1$ 이다. $N=37$ 에서 $\dim S_2=g=2$ 이고 이 준위에 순위 0 과 순위 1 의 타원곡선에 대응하는 두 새형식이 있다.

## 타원곡선 표

Cremona 의 알고리즘은 여기에 Hecke 작용소를 더한다. $\mathbb S_2^+(\Gamma_0(N))$ 위에서 $T_2,T_3,T_5,\dots$ 를 동시대각화해 1차원 고유공간을 찾으면 유리수 고윳값을 갖는 새형식이 나오고, 그 형식에 대응하는 [타원곡선](elliptic-curves.md)의 주기 격자를 기호의 적분값으로 복원해 Weierstrass 방정식을 얻는다. 도체별 타원곡선 목록과 LMFDB(L-functions and modular forms database)의 자료가 이렇게 만들어졌다.

## 모듈러성 판정

타원곡선 $E$ 가 도체 $N$ 의 새형식에서 오는지는 $E$ 의 $a_p$ 를 몇 개 계산하고 모듈러 기호 공간에서 같은 고윳값의 고유벡터를 찾아 확인한다. 유한 개의 $p$ 로 충분하다는 것이 Sturm 한계의 내용이므로 판정이 유한 시간에 끝난다. 모듈러성 정리의 증명 이전에 수치적 증거를 쌓은 것이 이 계산이다.

## p 진 L 함수 확장

Pollack–Stevens 의 [과수렴 모듈러 기호](overconvergent-modular-symbols.md)는 계수 [가군](modules.md) $V_{k-2}$ 를 $p$ 진 분포 공간으로 바꾼 것이다. 고전 기호로의 특수화 사상이 작은 기울기 고유공간에서 동형이 되고(Stevens 의 조절 정리) 그 올림이 [p 진 L 함수](p-adic-l-function.md)를 준다. 구성이 유한 계산이라 Iwasawa 이론의 수치 실험이 가능해졌다.

같은 틀이 허수이차체 위의 Bianchi 모듈러 기호와 전실체 위의 Hilbert 모듈러 기호로 옮겨 가며, 각각 해당 준위 구조의 $\mathbb P^1$ 위에서 같은 관계식을 갖는다.

[^1]: Yu. Manin, *Parabolic points and zeta functions of modular curves*, Izv. Akad. Nauk SSSR (1972) 가 유한 표현을 준 원논문이다. 알고리즘 전반은 J. Cremona, *Algorithms for Modular Elliptic Curves* (2판, 1997) 2–3장과 W. Stein, *Modular Forms: A Computational Approach* (2007) 8장에 정리되어 있다. Hecke 작용소의 Heilbronn 행렬 구현은 L. Merel, *Universal Fourier expansions of modular forms* (1994).

# 연관 문서

## 선수지식

- [모듈러 곡선](modular-curves.md)
- [Hecke 작용소](hecke-operators.md)

## 더 알아보기

- [Merel 의 일양 유계성 정리](merel-theorem.md)
- [p 진 L 함수](p-adic-l-function.md)
- [과수렴 모듈러 기호](overconvergent-modular-symbols.md)

#number_theory #computation #algebraic_topology
