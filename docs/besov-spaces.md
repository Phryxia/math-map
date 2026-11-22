# Besov 공간

# 개요

**Besov 공간(Besov space)** 은 함수를 주파수 대역별 조각으로 나누고, 조각의 크기가 높은 대역으로 갈수록 얼마나 빨리 줄어드는지로 매끄러움을 재어 모은 함수공간이다. 구간 $[0,1]$ 에서 $1$ 이고 밖에서 $0$ 인 계단 함수는 $s\lt 1/2$ 인 모든 [분수 Sobolev 공간](fractional-sobolev-spaces.md) $H^s$ 에 들고 $H^{1/2}$ 에는 들지 않는다. 그래서 이 함수의 매끄러움이 $1/2$ 라는 것을 Sobolev 공간 하나로는 적을 수 없다.

Besov 공간은 대역별 크기를 제곱해 더하는 대신 그 가운데 가장 큰 것을 재는 선택지를 둔다. 그렇게 재면 계단 함수는 매끄러움이 $1/2$ 인 Besov 공간에 든다.

# 직관

계단 함수 $u=\mathbf 1\_{\lbrack 0,1\rbrack}$ 의 [Fourier 변환](fourier-transform.md)은 다음 크기를 갖는다.

$$
\vert\hat u(\xi)\vert^2=\frac{\sin^2(\pi\xi)}{\pi^2\xi^2}
$$

[Littlewood–Paley 이론](littlewood-paley.md)대로 주파수를 $2^j\le\vert\xi\vert\lt 2^{j+1}$ 인 띠로 잘라 조각 $\Delta_ju$ 를 얻는다. $j\ge 0$ 이면 띠는 양쪽에 길이 $2^j$ 인 구간 둘이고, 길이 $1$ 마다 $\sin^2(\pi\xi)$ 의 적분은 $1/2$ 이며, 띠 위에서 $1/\xi^2$ 는 $2^{-2j-2}$ 와 $2^{-2j}$ 사이다. Plancherel 정리(Plancherel theorem)로 조각의 노름 제곱은 다음 범위에 있다.

$$
\frac{2^{-j}}{4\pi^2}\le\Vert\Delta_ju\Vert\_{L^2}^2\le\frac{2^{-j}}{\pi^2}
$$

$H^s$ 노름의 제곱은 조각마다 $2^{2js}$ 를 곱한 노름 제곱을 더한 것과 같은 크기다. 계단 함수에서 그 항은 $2^{j(2s-1)}$ 의 상수배이므로 합은 $s\lt 1/2$ 에서 유한하고 $s=1/2$ 에서 발산한다.

$s=1/2$ 에서 무게를 곱한 조각 크기 $2^{j/2}\Vert\Delta_ju\Vert\_{L^2}$ 는 모든 $j\ge 0$ 에서 $1/(2\pi)$ 와 $1/\pi$ 사이에 있다. 수열이 줄지 않으므로 제곱합은 무한이지만 가장 큰 항은 $1/\pi$ 이하다. 조각 크기의 수열을 제곱합 대신 최댓값으로 재면 계단 함수의 매끄러움 $1/2$ 가 유한한 노름으로 나온다.

# 정의

## 비동차 이진 분해

$\chi$ 가 $\mathbb R^n$ 위의 매끄러운 함수이고, $\vert\xi\vert\le 1$ 에서 $1$, $\vert\xi\vert\ge 2$ 에서 $0$ 이라 하자. $\varphi(\xi)=\chi(\xi)-\chi(2\xi)$ 로 두면 $\varphi$ 의 받침은 $\tfrac12\le\vert\xi\vert\le 2$ 에 들고, 모든 $\xi$ 에서 다음이 성립한다.

$$
\chi(\xi)+\sum_{j\ge 1}\varphi(2^{-j}\xi)=1
$$

$\widehat{\Delta_0f}=\chi\hat f$ 와 $j\ge 1$ 에서 $\widehat{\Delta_jf}(\xi)=\varphi(2^{-j}\xi)\hat f(\xi)$ 로 정한 조각들의 열을 **비동차 이진 분해(inhomogeneous dyadic decomposition)** 라 한다. 낮은 주파수 전체를 $\Delta_0$ 하나에 모으므로 $j$ 는 $0$ 이상의 정수만 돈다. 계단 함수에서도 $j\ge 1$ 인 조각의 크기는 직관 절의 계산처럼 $2^{-j/2}$ 의 상수배다.

## Besov 노름

$s\in\mathbb R$ 이고 $1\le p,q\le\infty$ 라 하자. 완만 분포(tempered distribution) $f$ 의 **Besov 노름(Besov norm)** 은 다음이다. 완만 분포는 [Schwartz 분포](schwartz-distributions.md) 가운데 Fourier 변환이 정의되는 것이다.

$$
\Vert f\Vert\_{B^s_{p,q}}=\Bigl(\sum_{j\ge 0}\bigl(2^{js}\Vert\Delta_jf\Vert\_{L^p}\bigr)^q\Bigr)^{1/q}
$$

$q=\infty$ 이면 합 대신 $j$ 에 대한 상한을 취한다. 이 노름이 유한한 $f$ 전체를 $B^s_{p,q}(\mathbb R^n)$ 이라 한다[^1]. $s$ 는 매끄러움, $p$ 는 조각 하나를 재는 적분 지수, $q$ 는 조각 크기의 수열을 모으는 방법이다.

계단 함수는 $s\lt 1/2$ 이면 모든 $q$ 에서 $B^s_{2,q}(\mathbb R)$ 에 들고, $s=1/2$ 이면 $q=\infty$ 일 때만 든다.

$L^p$ 노름과 $\ell^q$ 합의 순서를 바꾸어 점마다 $\ell^q$ 합을 먼저 취한 노름으로 정한 공간은 [Triebel–Lizorkin 공간](triebel-lizorkin-spaces.md) $F^s_{p,q}$ 다.

# 성질

## 분해 함수에 대한 무관성

정리. $\chi$ 를 다른 함수 $\chi'$ 으로 바꾸어 얻는 Besov 노름은 원래 노름과 동치다.

증명의 요지. 새 조각 $\tilde\Delta_j$ 의 받침은 옛 조각 $\Delta_{j-1}$, $\Delta_j$, $\Delta_{j+1}$ 의 받침을 합친 것 안에 있으므로 다음이 성립한다.

$$
\tilde\Delta_j=\tilde\Delta_j\bigl(\Delta_{j-1}+\Delta_j+\Delta_{j+1}\bigr)
$$

$\tilde\Delta_j$ 는 $L^1$ 노름이 $j$ 에 무관한 핵과의 합성곱이므로 [Young 의 합성곱 부등식](young-convolution-inequality.md)으로 $\Vert\tilde\Delta_jf\Vert\_{L^p}$ 가 옛 조각 셋의 노름 합의 상수배 이하다.

## Sobolev 공간과의 관계

$s\in\mathbb R$ 이면 $B^s_{2,2}(\mathbb R^n)=H^s(\mathbb R^n)$ 이다. Plancherel 정리로 두 노름의 제곱이 모두 $(1+\vert\xi\vert^2)^s\vert\hat f(\xi)\vert^2$ 의 적분과 같은 크기이기 때문이다.

$0\lt s\lt 1$ 이고 $1\le p\lt\infty$ 이면 Gagliardo 반노름으로 정한 분수 Sobolev 공간이 Besov 공간과 같다[^1].

$$
W^{s,p}(\mathbb R^n)=B^s_{p,p}(\mathbb R^n)
$$

정수 $k\ge 0$ 과 $1\lt p\lt\infty$ 에서는 [Sobolev 공간](sobolev-spaces.md) $W^{k,p}$ 가 두 Besov 공간 사이에 있다.

$$
B^k_{p,\min(p,2)}\subset W^{k,p}\subset B^k_{p,\max(p,2)}
$$

증명의 요지. Littlewood–Paley 이론 문서의 띠 표현으로 $W^{k,p}$ 노름은 $2^{jk}\vert\Delta_jf\vert$ 의 $\ell^2$ 합의 $L^p$ 노름이다. $p\ge 2$ 이면 [Minkowski 적분 부등식](minkowski-integral-inequality.md)을 $L^{p/2}$ 에 적용해 이것이 $\ell^2$ 합 쪽 Besov 노름 이하이고, 점마다 $\ell^2$ 합이 $\ell^p$ 합 이상이므로 $B^k_{p,p}$ 노름 이상이다. $p\lt 2$ 이면 부등식의 방향이 바뀐다.

계단 함수는 $B^{1/2}\_{2,\infty}(\mathbb R)$ 에 들고 $H^{1/2}(\mathbb R)=B^{1/2}\_{2,2}(\mathbb R)$ 에 들지 않는다.

## 지수 사이의 포함

$q_0\le q_1$ 이면 수열 공간의 포함 $\ell^{q_0}\subset\ell^{q_1}$ 에서 $B^s_{p,q_0}\subset B^s_{p,q_1}$ 이 나온다. $\varepsilon\gt 0$ 이면 등비급수 $\sum_j2^{-j\varepsilon}$ 이 수렴하므로 $B^{s+\varepsilon}\_{p,\infty}\subset B^s_{p,1}$ 이다. 매끄러움 $s$ 를 조금이라도 바꾸면 $q$ 의 차이는 사라진다.

## Hölder 공간과의 관계

정리. $0\lt s\lt 1$ 이면 $B^s_{\infty,\infty}(\mathbb R^n)$ 은 유계이고 지수 $s$ 의 Hölder 조건을 만족하는 함수의 공간, 곧 [Hölder 공간](holder-spaces.md) $C^{0,s}(\mathbb R^n)$ 과 같고 두 노름은 동치다[^1].

증명의 요지. $j\ge 1$ 이면 $\Delta_j$ 의 핵 $K_j$ 의 적분이 $\varphi(0)=0$ 이므로 다음이 성립한다.

$$
\Delta_jf(x)=\int K_j(y)\bigl(f(x-y)-f(x)\bigr)\thinspace dy
$$

$\vert f(x-y)-f(x)\vert\le\lbrack f\rbrack\_s\vert y\vert^s$ 를 넣으면 $\vert\Delta_jf(x)\vert\le C2^{-js}\lbrack f\rbrack\_s$ 이다. 거꾸로 $2^{-J}$ 가 $\vert h\vert$ 와 같은 크기가 되게 $J$ 를 잡아 $f(x+h)-f(x)$ 를 $j\le J$ 인 조각과 $j\gt J$ 인 조각으로 가른다. 낮은 쪽은 아래 Bernstein 부등식으로 기울기가 $2^{j(1-s)}$ 의 상수배 이하이므로 합이 $\vert h\vert^s$ 의 상수배다. 높은 쪽은 조각마다 $2\Vert\Delta_jf\Vert\_{L^\infty}$ 이하이므로 합이 $2^{-Js}$ 의 상수배다.

$s=1$ 에서는 같은 계산이 Lipschitz 조건 대신 이계 차분의 조건 $\vert f(x+h)+f(x-h)-2f(x)\vert\le C\vert h\vert$ 를 준다. 이 조건을 만족하는 함수의 공간을 Zygmund 공간(Zygmund class)이라 한다.

## Bernstein 부등식과 매장

Bernstein 부등식(Bernstein inequality). $\hat g$ 의 받침이 반지름 $2^j$ 인 공 안에 있고 $1\le p\le r\le\infty$ 이면 $j$ 에 무관한 상수 $C$ 가 있어 다음이 성립한다.

$$
\Vert g\Vert\_{L^r}\le C2^{jn(1/p-1/r)}\Vert g\Vert\_{L^p}
$$

증명의 요지. $\hat\eta$ 가 반지름 $1$ 인 공에서 $1$ 인 매끄러운 함수이면 $g=g\ast 2^{jn}\eta(2^j\thinspace\cdot\thinspace)$ 이다. 이 핵의 $L^t$ 노름은 $2^{jn(1-1/t)}$ 의 상수배이고, $1+1/r=1/t+1/p$ 로 두고 Young 의 합성곱 부등식을 쓴다.

조각마다 이 부등식을 적용하면 다음 매장이 나온다.

$$
B^s_{p,q}(\mathbb R^n)\subset B^{s-n(1/p-1/r)}\_{r,q}(\mathbb R^n),\qquad p\le r
$$

$s=n/p$, $q=1$, $r=\infty$ 이면 $\sum_j\Vert\Delta_jf\Vert\_{L^\infty}$ 가 유한하므로 $f$ 는 유계이고 연속이다. $W^{n/p,p}(\mathbb R^n)\subset L^\infty$ 는 $1\lt p\lt\infty$ 에서 성립하지 않으므로, 이 끝점의 매장은 Besov 공간에서만 얻는다.

## 흔적 정리

정리. $1\le p\lt\infty$, $1\le q\le\infty$, $s\gt 1/p$ 이면 $\mathbb R^n$ 위의 함수를 초평면 $\mathbb R^{n-1}$ 로 제한하는 사상이 $B^s_{p,q}(\mathbb R^n)$ 에서 $B^{s-1/p}\_{p,q}(\mathbb R^{n-1})$ 위로 가는 유계 전사로 연장된다[^1].

$1\lt p\lt\infty$ 이면 $W^{1,p}(\mathbb R^n)$ 함수의 초평면 위 값 전체는 $B^{1-1/p}\_{p,p}(\mathbb R^{n-1})$ 이다[^2]. $p=2$ 이면 이것은 분수 Sobolev 공간 문서의 경계값 공간 $H^{1/2}$ 다. $p\ne 2$ 이면 경계값 공간은 $q=p$ 인 Besov 공간이고, 어느 Sobolev 공간 $W^{t,p}$ 와도 다르다.

# 활용

- 경계값 문제. $W^{1,p}$ 에서 푸는 타원형 방정식과 $p$-Laplace 방정식의 [Dirichlet 문제](dirichlet-problem.md)에서, 경계값 $g$ 가 받아들여지는 조건은 흔적 정리가 주는 $g\in B^{1-1/p}\_{p,p}(\partial\Omega)$ 다.
- 웨이블릿 계수. 충분히 매끄러운 웨이블릿 기저에서 Besov 노름은 웨이블릿 계수의 크기에 척도마다 무게를 주고 척도 안에서 $\ell^p$, 척도 사이에서 $\ell^q$ 로 모은 노름과 동치다[^3]. [웨이블릿 변환](wavelet-transform.md)의 계수를 문턱값 아래에서 $0$ 으로 만드는 축소 추정량(wavelet shrinkage)은 Besov 공간의 공 위에서 최소최대 위험의 상수배 안에 든다[^4]. 이 결과가 영상 압축과 잡음 제거에서 문턱 처리를 쓰는 근거다.
- [Brown 운동](brownian-motion.md)의 경로. $\lbrack 0,1\rbrack$ 위의 Brown 운동의 경로는 거의 확실하게 $1\le p\lt\infty$ 인 모든 $B^{1/2}\_{p,\infty}$ 에 들고 $q\lt\infty$ 인 $B^{1/2}\_{p,q}$ 에는 들지 않는다[^5]. Hölder 공간으로는 지수 $1/2$ 바로 아래까지만 적히는 매끄러움이 Besov 공간에서 정확히 $1/2$ 로 적힌다.
- 비선형 편미분방정식. 끝점 매장 $B^{n/p}\_{p,1}\subset L^\infty$ 와 [Paraproduct](paraproducts.md) 분해로 곱의 노름을 누를 수 있어, 척도 불변인 Besov 공간에서 [Navier–Stokes 방정식](navier-stokes-equations.md)과 분산 방정식의 해의 존재를 보이는 데 쓴다.

[^1]: H. Triebel, *Theory of Function Spaces*, Birkhäuser (1983), Chapter 2. 정의와 분해 함수에 대한 무관성은 §2.3, 차분에 의한 특성화와 Hölder–Zygmund 공간은 §2.5, 흔적 정리는 §2.7 에 있다. 처음 정의는 O. V. Besov, "On a family of function spaces. Embedding and extension theorems", Doklady Akademii Nauk SSSR **126** (1959), 1163–1165 다.

[^2]: E. Gagliardo, "Caratterizzazioni delle tracce sulla frontiera relative ad alcune classi di funzioni in n variabili", Rendiconti del Seminario Matematico della Università di Padova **27** (1957), 284–305.

[^3]: Y. Meyer, *Ondelettes et opérateurs I*, Hermann (1990), Chapitre 6.

[^4]: D. L. Donoho, I. M. Johnstone, "Minimax estimation via wavelet shrinkage", Annals of Statistics **26** (1998), 879–921.

[^5]: Z. Ciesielski, G. Kerkyacharian, B. Roynette, "Quelques espaces fonctionnels associés à des processus gaussiens", Studia Mathematica **107** (1993), 171–204.

# 연관 문서

## 선수지식

- [Littlewood–Paley 이론](littlewood-paley.md)
- [분수 Sobolev 공간](fractional-sobolev-spaces.md)

## 더 알아보기

- [Paraproduct](paraproducts.md)
- [실보간](real-interpolation.md)
- [Triebel–Lizorkin 공간](triebel-lizorkin-spaces.md)

#functional_analysis #analysis #statistics
