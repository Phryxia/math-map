# Rankin–Selberg 적분

# 개요

**Rankin–Selberg 적분(Rankin–Selberg integral)** 은 두 모듈러 형식의 곱을 [Eisenstein 급수](eisenstein-series.md)와 함께 적분해, 두 형식의 계수를 곱한 급수의 성질을 얻는 방법이다. $\Delta=q-24q^2+252q^3-\cdots$ 의 계수 $\tau(n)$ 은 부호가 불규칙하게 바뀌므로, $\tau(n)^2$ 을 $n\le x$ 까지 더한 값이 $x$ 에 따라 어떻게 커지는지가 계수만 봐서는 보이지 않는다. Rankin 과 Selberg 는 1939–40 년에 $\vert\Delta\vert^2$ 에 Eisenstein 급수를 곱해 적분하면 급수 $\sum\tau(n)^2n^{-s}$ 가 나옴을 보였고, Eisenstein 급수의 극점에서 그 합이 $x^{12}$ 에 비례해 커진다는 것이 유도된다.

# 직관

$\Delta(z)=\sum\tau(n)q^n$ 의 계수는 $\tau(1)=1$, $\tau(2)=-24$, $\tau(3)=252$ 로 부호가 섞여 있다. $\tau(n)^2$ 을 $n\le x$ 까지 더한 값이 얼마나 빨리 커지는지 알려면, 제곱이 나오는 식부터 찾는다. $q=e^{2\pi iz}$ 이므로 $\lvert\Delta(z)\rvert^2=\sum_{n,m}\tau(n)\tau(m)e^{2\pi i(n-m)x}e^{-2\pi(n+m)y}$ 이고, 이것을 $x$ 에 대해 $0$ 부터 $1$ 까지 적분하면 $n\ne m$ 인 항은 $0$ 이 되어 $\sum_n\tau(n)^2e^{-4\pi ny}$ 만 남는다.

여기에 $y^{s+10}$ 을 곱해 $y$ 에 대해 $0$ 부터 $\infty$ 까지 적분하면 $\int_0^\infty y^{s+10}e^{-4\pi ny}\thinspace dy=\Gamma(s+11)(4\pi n)^{-s-11}$ 이므로

$$
\int_0^\infty\negthinspace\int_0^1\lvert\Delta(z)\rvert^2y^{12}\thinspace y^s\thinspace\frac{dx\thinspace dy}{y^2}
=\frac{\Gamma(s+11)}{(4\pi)^{s+11}}\sum_{n\ge1}\frac{\tau(n)^2}{n^{s+11}}
$$

이 나온다. 오른쪽 급수의 극을 알면 $\tau(n)^2$ 의 합이 얼마나 커지는지 알 수 있다. 그런데 왼쪽은 띠 $0\le x\lt 1$, $y\gt 0$ 전체에서의 적분이라 크기를 직접 다루기 어렵다.

$\lvert\Delta(z)\rvert^2y^{12}$ 은 $z\mapsto-1/z$ 와 $z\mapsto z+1$ 로 바꿔도 값이 같다. 그래서 띠는 기본영역(각 점의 옮김을 하나씩만 담는 영역) 하나를 $\mathrm{SL}\_2(\mathbb Z)$ 의 원소들로 옮긴 조각들로 덮이고, 띠 위의 적분은 기본영역 위에서 $\lvert\Delta\rvert^2y^{12}$ 에 조각마다의 $\mathrm{Im}(\gamma z)^s$ 를 모두 더한 함수를 곱해 적분한 것과 같다. 그 합이 [Eisenstein 급수](eisenstein-series.md) $E(z,s)$ 다. 띠 위의 적분이 기본영역 위의 $\lvert\Delta\rvert^2y^{12}E(z,s)$ 의 적분으로 바뀌었다.

$E(z,s)$ 는 $s=1$ 에서 단순극을 갖고, 그 유수는 $z$ 와 무관한 상수 $3/\pi$ 다. 그러면 왼쪽 적분도 $s=1$ 에서 단순극을 갖고 유수는 $\frac3\pi\int\lvert\Delta\rvert^2y^{12}\thinspace d\mu\gt 0$ 이다. 오른쪽 급수 $\sum\tau(n)^2n^{-s-11}$ 이 $s=1$ 에 단순극을 가지므로 [Tauber 정리](tauberian-theorems.md)로 $\sum_{n\le x}\tau(n)^2n^{-11}$ 이 $x$ 에 비례해 커지고, $\sum_{n\le x}\tau(n)^2$ 은 $x^{12}$ 에 비례해 커진다.

# 정의

## 고전적 적분

$f\in S_k(\mathrm{SL}\_2(\mathbb Z))$ 와 $g\in S_k(\mathrm{SL}\_2(\mathbb Z))$ 의 Fourier 전개를 각각 $f=\sum a_nq^n$ 과 $g=\sum b_nq^n$ 이라 하고 $\Gamma=\mathrm{SL}\_2(\mathbb Z)$, $\Gamma_\infty=\lbrace\pm\begin{pmatrix}1&n\cr 0&1\end{pmatrix}\rbrace$ 라 하자. 실해석적 Eisenstein 급수는

$$
E(z,s)=\sum_{\gamma\in\Gamma_\infty\backslash\Gamma}\mathrm{Im}(\gamma z)^s
=\tfrac12\sum_{\gcd(c,d)=1}\frac{y^s}{\lvert cz+d\rvert^{2s}}
$$

이고 $\mathrm{Re}(s)\gt 1$ 에서 수렴한다. **Rankin–Selberg 적분** 은

$$
I(s)=\int_{\Gamma\backslash\mathbb H}f(z)\overline{g(z)}\thinspace y^{k}E(z,s)\thinspace\frac{dx\thinspace dy}{y^2}
$$

이다. $f=g=\Delta$, $k=12$ 이면 직관 절의 적분이다.

**펼치기(unfolding)** 는 $\Gamma$ 불변 함수 $F$ 에 대해 $\Gamma_\infty\backslash\Gamma$ 위의 합을 적분 영역으로 흡수하는 등식이다.

$$
\int_{\Gamma\backslash\mathbb H}F(z)\sum_{\gamma\in\Gamma_\infty\backslash\Gamma}
\mathrm{Im}(\gamma z)^s\thinspace d\mu
=\int_{\Gamma_\infty\backslash\mathbb H}F(z)\thinspace y^s\thinspace d\mu
$$

$F=f\bar gy^k$ 에 쓰고 $x$ 로 적분하면 $\int_0^1e^{2\pi i(n-m)x}\thinspace dx=\delta_{nm}$ 이 대각항만 남겨

$$
I(s)=\frac{\Gamma(s+k-1)}{(4\pi)^{s+k-1}}\sum_{n\ge1}\frac{a_n\overline{b_n}}{n^{s+k-1}}
$$

이 된다. 완비 Eisenstein 급수 $E^\ast(z,s)=\xi(2s)E(z,s)$ 는 $s\in\mathbb C$ 전체로 유리형 접속되고, $E^\ast(z,s)=E^\ast(z,1-s)$ 를 만족하며, 극은 $s=0,1$ 의 단순극뿐이다. $\xi(s)=\pi^{-s/2}\Gamma(s/2)\zeta(s)$ 는 완비 [Riemann zeta 함수](riemann-zeta.md)다.

## Whittaker 함수

$\psi:\mathbb Q\backslash\mathbb A\to\mathbb C^\times$ 를 자명하지 않은 가법 지표, $N_n$ 을 $\mathrm{GL}\_n$ 의 상삼각 멱단군이라 하고 $\psi_N(u)=\psi\bigl(\sum_{i=1}^{n-1}u_{i,i+1}\bigr)$ 로 둔다. 첨점형식 $\varphi$ 의 **Whittaker 함수(Whittaker function)** 는 다음 적분이다.

$$
W_\varphi(g)=\int_{N_n(\mathbb Q)\backslash N_n(\mathbb A)}\varphi(ug)\thinspace\psi_N^{-1}(u)\thinspace du
$$

첨점형식은 $\mathrm{GL}\_{n-1}$ 의 유리점에 대한 합으로 전개된다.

$$
\varphi(g)=\sum_{\gamma\in N_{n-1}(\mathbb Q)\backslash\mathrm{GL}\_{n-1}(\mathbb Q)}
W_\varphi\negthinspace\left(\begin{pmatrix}\gamma&\cr&1\end{pmatrix}g\right)
$$

$n=2$ 이면 $N_2$ 는 $x$ 방향 평행이동이고 $N_1$ 은 자명하므로, 이 합은 $\gamma\in\mathbb Q^\times$ 에 대한 합이고 Fourier 전개 $\Delta=\sum\tau(n)q^n$ 의 아델판이다. $\gamma=n$ 항이 $\tau(n)q^n$ 항에 대응한다. $n\ge3$ 에서는 $N_n$ 이 아벨군이 아니어서 계수가 수열로 적히지 않고, 이 함수 $W_\varphi$ 가 계수 자리에 온다.

## GLₙ×GLₘ 적분

$\pi$ 와 $\pi'$ 가 각각 $\mathrm{GL}\_n(\mathbb A)$ 와 $\mathrm{GL}\_m(\mathbb A)$ 의 첨점 표현이라 하자. $m=n-1$ 이면 적분은

$$
\Psi(s,W,W')=\int_{N_m(\mathbb A)\backslash\mathrm{GL}\_m(\mathbb A)}
W\negthinspace\left(\begin{pmatrix}g&\cr&1\end{pmatrix}\right)W'(g)\thinspace
\lvert\det g\rvert^{\thinspace s-\frac12}\thinspace dg
$$

이고, $m\lt n-1$ 이면 가운데에 멱단 적분이 더 붙는다. $m=n$ 이면 Schwartz 함수 $\Phi\in\mathcal S(\mathbb A^n)$ 에서 만든 Eisenstein 급수 $E(g,s;\Phi)$ 로

$$
I(s,\varphi,\varphi',\Phi)=\int_{Z(\mathbb A)\mathrm{GL}\_n(\mathbb Q)\backslash\mathrm{GL}\_n(\mathbb A)}
\varphi(g)\thinspace\varphi'(g)\thinspace E(g,s;\Phi)\thinspace dg
$$

로 정의한다. $n=m=2$ 이고 $\varphi$, $\varphi'$ 이 $\Delta$ 와 그 켤레에서 오면 고전적 적분이다. [Godement–Jacquet 적분](godement-jacquet.md)이 $\mathrm{GL}\_n$ 하나의 표준 $L$ 함수를 행렬 공간 위의 적분으로 쓰는 것과 달리, 이 적분은 두 표현의 곱 $L$ 함수를 $\mathrm{GL}\_m$ 위의 적분으로 쓴다.

## 국소 인자와 전역 L 함수

각 자리에서 국소 적분 $\Psi_v(s,W_v,W'\_v)$ 는 $q_v^{-s}$ 의 유리함수이고, 이들이 생성하는 분수 아이디얼의 정규화된 생성원 $L(s,\pi_v\times\pi'\_v)$ 가 국소 $L$ 인자다. 비분기 자리에서는 [Satake 동형](satake-isomorphism.md)이 주는 Satake 매개변수 $(\alpha_i)$ 와 $(\beta_j)$ 로

$$
L(s,\pi_v\times\pi'\_v)=\det\bigl(1-q_v^{-s}A_{\pi_v}\otimes A_{\pi'\_v}\bigr)^{-1}
=\prod_{i=1}^{n}\prod_{j=1}^{m}\bigl(1-\alpha_i\beta_j\thinspace q_v^{-s}\bigr)^{-1}
$$

이고, 전역 $L$ 함수는 $L(s,\pi\times\pi')=\prod_vL(s,\pi_v\times\pi'\_v)$ 다. $\pi=\pi'$ 가 $\Delta$ 에서 오면 $\alpha_p\beta_p=1$ 이므로 $p$ 인자는 $\bigl((1-\alpha_p^2x)(1-x)^2(1-\beta_p^2x)\bigr)^{-1}$, $x=p^{-s}$ 다.

# 성질

## Jacquet–Piatetski-Shapiro–Shalika 정리

> $\pi$ 와 $\pi'$ 가 각각 $\mathrm{GL}\_n$ 과 $\mathrm{GL}\_m$ 의 첨점 자기동형 표현이면 $L(s,\pi\times\pi')$ 는 $\mathbb C$ 전체로 유리형 접속되고(Jacquet–Piatetski-Shapiro–Shalika, 1983), 완비 $L$ 함수가
> $$
> \Lambda(s,\pi\times\pi')=\varepsilon(s,\pi\times\pi')\thinspace\Lambda(1-s,\tilde\pi\times\tilde\pi')
> $$
> 를 만족한다. $\pi'\not\cong\tilde\pi\otimes\lvert\cdot\rvert^{it}$ 이면 정함수이고, $n=m$ 이며 $\pi'\cong\tilde\pi\otimes\lvert\cdot\rvert^{it}$ 이면 $s=-it$ 와 $s=1-it$ 에 단순극을 갖는다.[^1]

## 국소 적분으로의 분해

Shalika 와 Gelfand–Kazhdan 의 정리로 $\mathrm{Hom}\_{N}(\pi_v,\psi_v)$ 는 많아야 1 차원이다. 그래서 $\pi=\otimes_v\pi_v$ 가 첨점 표현이면 각 자리에서 $\psi_v$ 형 [Whittaker 모형](whittaker-models.md)이 유일하게 존재하고, 분해 가능한 $\varphi$ 에 대해 $W_\varphi=\prod_vW_v$ 다. 피적분함수와 측도가 모두 곱이므로 전역 적분이 국소 적분 $\Psi_v$ 의 곱이 된다.

## 유수와 Petersson 내적

$E(z,s)$ 는 $s=1$ 에서 단순극을 갖고 유수가 $1/\mathrm{vol}(\Gamma\backslash\mathbb H)=3/\pi$ 인 상수다. 그러므로 고전적 적분의 유수는 내적이다.

$$
\mathrm{Res}\_{s=1}I(s)=\frac1{\mathrm{vol}}\int_{\Gamma\backslash\mathbb H}f\bar gy^k\thinspace d\mu
=\frac{\langle f,g\rangle}{\mathrm{vol}}
$$

오른쪽의 $\langle f,g\rangle$ 이 Petersson 내적(Petersson inner product)이고, $f=g$ 이면 양수라 극이 있고 $f\perp g$ 이면 극이 사라진다. 아델판에서 이 계산이 $L(s,\pi\times\pi')$ 의 $s=1$ 에서의 극과 $\pi'\cong\tilde\pi$ 의 동치가 된다.

## 극 판정의 따름정리

극 판정에서 다음이 나온다.

- 강한 중복도 1 정리(strong multiplicity one theorem). 거의 모든 자리에서 $\pi_v\cong\pi'\_v$ 이면 $\pi\cong\pi'$ 다. $L(s,\pi\times\tilde\pi')$ 의 극을 보면 된다.
- $\mathrm{Re}(s)=1$ 위의 비소멸. $L(1+it,\pi)\ne0$ 이다(Jacquet–Shalika). $\pi\times\tilde\pi$ 의 $L$ 함수가 계수가 음이 아니고 $s=1$ 에 극을 가진다는 사실을 [소수 정리](prime-number-theorem.md)의 $\zeta$ 논법과 똑같이 쓴다.
- Ramanujan 형 추정. $L(s,\pi\times\tilde\pi)$ 가 $\mathrm{Re}(s)\gt 1$ 에서 수렴한다는 사실만으로 Satake 매개변수가 $\lvert\alpha_i\rvert\lt q^{1/2}$ 로 갇힌다(Jacquet–Shalika). 더 정교한 논법이 $\lvert\alpha_i\rvert\le q^{1/2-1/(n^2+1)}$ 를 준다(Luo–Rudnick–Sarnak). 추측이 요구하는 $\lvert\alpha_i\rvert=1$ 에는 미치지 못한다.

## 계수의 합과 L 함수의 차이

고전적 적분이 주는 $\sum_na_n\overline{b_n}n^{-s}$ 는 Hecke 고유형식이면 계수가 곱셈적이어서 Euler 곱을 갖지만, 그 $p$ 인자는 $L(s,\pi_p\times\pi'\_p)$ 와 다르다. 둘의 관계는 다음 항등식이다. $(\alpha_1,\alpha_2)=(\alpha,\beta)$, $(\alpha'\_1,\alpha'\_2)=(\alpha',\beta')$ 이다.

$$
\sum_{m\ge0}h_m(\alpha,\beta)\thinspace h_m(\alpha',\beta')\thinspace x^m
=\frac{1-\alpha\beta\alpha'\beta'x^2}{\prod_{i,j}(1-\alpha_i\alpha'\_jx)}
$$

$h_m$ 은 완전 동차 대칭 다항식이고 $h_m(\alpha,\beta)$ 가 정규화된 $a_{p^m}$ 이다. 분자의 $x^2$ 항이 보정이고 전역적으로 $\zeta(2s)$ 의 역수가 된다.

$\Delta$ 두 개를 곱하면 $\alpha\beta=\alpha'\beta'=1$ 이므로 보정이 $1-x^2$ 이다. $\mathrm{GL}\_2\times\mathrm{GL}\_2$ 의 $L$ 함수가 $\zeta\cdot L(\mathrm{Sym}^2)$ 으로 쪼개지므로 다음 항등식이 나온다.

$$
\sum_{n\ge1}\frac{\tau(n)^2}{n^{s}}
=\frac{\zeta(s-11)\thinspace L(s,\mathrm{Sym}^2\Delta)}{\zeta(2s-22)}
$$

여기서 $L(s,\mathrm{Sym}^2\Delta)$ 의 국소 인자는 $\alpha_p^2,\thickspace 1,\thickspace\beta_p^2$ 에서 오는 3 차식이고, $\alpha_p^2+\beta_p^2=\tau(p)^2/p^{11}-2$ 이므로 계수가 전부 정수다.

$$
L_p(s,\mathrm{Sym}^2\Delta)^{-1}
=(1-p^{11}x)\bigl(1-(\tau(p)^2-2p^{11})x+p^{22}x^2\bigr),\qquad x=p^{-s}
$$

Rankin 이 1939 년에 이 항등식에서 $\tau(n)=O(n^{29/5})$ 를 얻었다. Hecke 의 추정 $O(n^6)$ 을 처음으로 넘은 결과다. Deligne 은 1974 년에 Weil 추측의 증명으로 $\lvert\tau(p)\rvert\le2p^{11/2}$ 을 얻었다.

## 두 가지 방법의 비교

$L$ 함수를 값으로 갖는 적분을 만들고 적분의 다른 표현에서 성질을 읽는 전략은 [Tate 의 zeta 적분](tate-zeta-integral.md)과 Godement–Jacquet 과 같고, 함수방정식의 출처만 다르다. 그쪽은 Poisson 합공식이고 여기서는 Eisenstein 급수다.

자기동형 $L$ 함수의 해석적 성질을 얻는 방법은 두 갈래다.

| | 적분 표현 | Langlands–Shahidi |
|---|---|---|
| 대상 | $\mathrm{GL}\_n$ 표준, $\mathrm{GL}\_n\times\mathrm{GL}\_m$ | 포물 부분군의 Levi 에서 나오는 $L$ 함수 |
| 원리 | 펼치기, Whittaker 유일성 | Eisenstein 급수의 상수항과 얽힘 작용소 |
| 강점 | 무조건적, 국소 인자가 명시적 | 다루는 $L$ 함수의 범위가 넓다 |
| 약점 | 적절한 적분을 찾아야 한다 | 얽힘 작용소의 정규화가 어렵다 |

두 방법이 같은 $L$ 함수를 다룰 때 국소 인자가 일치한다는 것은 별도의 정리다.

# 활용

## 역정리와 함수성

**역정리(converse theorem)** 는 Hecke 의 고전적 역정리를 $\mathrm{GL}\_n$ 으로 올린 것이다.

> $\Pi=\otimes\Pi_v$ 가 $\mathrm{GL}\_n(\mathbb A)$ 의 기약 허용 표현이고, $m\le n-2$ 인 모든 $\mathrm{GL}\_m$ 첨점 표현 $\tau$ 에 대해 $L(s,\Pi\times\tau)$ 가 "좋으면"(정함수, 수직 띠에서 유계, 함수방정식) $\Pi$ 는 자기동형이다.[^2]

이 정리가 함수성 증명의 표준 전략을 준다. 올리려는 표현 $\Pi$ 를 자리마다 국소적으로 정의하고, 전역적 자기동형성을 직접 보이는 대신 모든 꼬임 $L$ 함수가 좋다는 것만 보인다. 꼬임 $L$ 함수의 해석적 성질은 Rankin–Selberg 나 Langlands–Shahidi 로 얻는다.

$\mathrm{GL}\_2$ 의 대칭 거듭제곱 올림이 그 성과다.

$$
\mathrm{Sym}^3:\mathrm{GL}\_2(\mathbb C)\to\mathrm{GL}\_4(\mathbb C),
\qquad
\mathrm{Sym}^4:\mathrm{GL}\_2(\mathbb C)\to\mathrm{GL}\_5(\mathbb C)
$$

Kim 과 Shahidi 가 2002 년에 $\mathrm{Sym}^3$ 의 자기동형성을, Kim 이 $\mathrm{Sym}^4$ 의 자기동형성을 역정리로 증명했다. [Sato–Tate](sato-tate.md)의 초기 부분 결과와 Ramanujan 추측을 향한 최선의 추정 $\lvert\alpha_p\rvert\le p^{7/64}$ 가 이 결과에서 나온다. 정칙 고유형식의 모든 $m$ 에 대한 $\mathrm{Sym}^m$ 올림은 Newton–Thorne 이 2021 년에 모듈러성 올리기(modularity lifting)로 증명했다.

## 해석적 정수론의 도구

$\mathrm{GL}\_n\times\mathrm{GL}\_m$ 의 $L$ 함수는 자기동형 형식의 해석적 연구에서 다음과 같이 쓰인다.

- 적률 계산. $\sum_{n\le X}\lvert a_n\rvert^2$ 의 점근이 $L(s,\pi\times\tilde\pi)$ 의 $s=1$ 극에서 나오고, 계수의 평균 크기를 준다.
- 부볼록 추정(subconvexity bound). $L(1/2+it,\pi)$ 의 크기를 볼록성 한계보다 좋게 잡는 문제에서 증폭 기법(amplification)이 $\pi\times\tilde\pi$ 의 $L$ 함수를 증폭기로 쓴다.
- 양자 유일 에르고딕성(quantum unique ergodicity, QUE). 정칙 고유형식에 대한 Holowinsky–Soundararajan 의 증명에서 $L(1,\mathrm{Sym}^2f)$ 의 크기가 입력이다.

## 다른 군과 주기

- 고전군의 적분. $\mathrm{GL}\_n$ 바깥에서는 Whittaker 모형의 유일성이 깨지기도 하고 적절한 적분을 찾는 것 자체가 연구 주제다. Bump–Friedberg, Ginzburg–Rallis–Soudry 의 적분이 고전군의 $L$ 함수와 내림 사상을 다룬다.
- 주기와 특수값. 적분 표현은 $L$ 함수의 특수값을 주기로 쓰는 식을 준다. Deligne 추측(Deligne's conjecture)은 임계점에서의 $L$ 값을 알맞은 주기로 나눈 몫이 대수적 수라고 예측한다.

[^1]: H. Jacquet, I. I. Piatetski-Shapiro, J. A. Shalika, *Rankin–Selberg convolutions*, Amer. J. Math. **105** (1983), 367–464. 고전적 원형은 R. A. Rankin, *Contributions to the theory of Ramanujan's function τ(n)*, Proc. Cambridge Philos. Soc. **35** (1939), 351–372 와 A. Selberg, *Bemerkungen über eine Dirichletsche Reihe*, Arch. Math. Naturvid. **43** (1940). Whittaker 모형의 유일성은 J. Shalika, *The multiplicity one theorem for GL(n)*, Ann. of Math. **100** (1974). 해설로는 J. Cogdell, *L functions and converse theorems for GL(n)*, IAS/Park City 강의록 (2002).

[^2]: J. Cogdell, I. I. Piatetski-Shapiro, *Converse theorems for GL(n)*, Publ. Math. IHÉS **79** (1994), 157–214. $\mathrm{Sym}^3$ 과 $\mathrm{Sym}^4$ 올림은 H. Kim, F. Shahidi, *Functorial products for GL(2)×GL(3)*, Ann. of Math. **155** (2002) 와 H. Kim, *Functoriality for the exterior square of GL(4)*, J. Amer. Math. Soc. **16** (2003).

# 연관 문서

## 선수지식

- [Godement–Jacquet 적분](godement-jacquet.md)
- [Satake 동형](satake-isomorphism.md)
- [Eisenstein 급수](eisenstein-series.md)

## 더 알아보기

- [Whittaker 모형과 중복도 1](whittaker-models.md)

#number_theory #analysis #group_theory #computation
