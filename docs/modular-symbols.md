# 모듈러 기호

# 개요

[모듈러 형식](modular-forms.md)과 [Hecke 작용소](hecke-operators.md)는 이론적으로 완결된 대상이지만, 손에 쥐고 계산하려 하면 곧 막힌다. $S_k(\Gamma_0(N))$ 의 원소는 무한급수이고, Hecke 작용소는 그 급수에 작용한다. 차원을 알아도 기저를 어떻게 얻는가. 새형식을 어떻게 나열하는가. $L$ 값을 어떻게 구하는가.

모듈러 기호는 이 질문들을 **유한 차원 정수 선형대수**로 바꾼다. 출발점은 [모듈러 곡선](modular-curves.md) $X_0(N)$ 의 위상이다. 무게 $2$ 의 첨점형식은 $X_0(N)$ 위의 정칙 1형식과 같으므로, 형식을 직접 다루는 대신 그것을 적분할 **경로**를 다루면 된다. 첨점을 양 끝으로 허용한 경로의 호몰로지류

$$
H_1\big(X_0(N),\ \text{첨점};\ \mathbb Z\big)
$$

가 $S_2(\Gamma_0(N))$ 의 쌍대이고, Hecke 작용소가 이 격자 위에 정수 행렬로 작용한다.

Manin 의 기여는 이 군의 완전한 유한 표현을 준 것이다. 생성원은 $\mathbb P^1(\mathbb Z/N)$ 의 원소로 매개되고 개수는 $[\mathrm{SL}_2(\mathbb Z):\Gamma_0(N)]$ 이며, 관계식은 두 줄이다. 그래서 컴퓨터가 $N$ 을 받아 $S_2(\Gamma_0(N))$ 의 Hecke 고유형식을 통째로 뽑아낼 수 있다. Cremona 의 타원곡선 표와 LMFDB 의 모듈러 형식 자료가 모두 이 알고리즘에서 나온다.

# 직관

## 형식 대신 경로를 다룬다

$f\in S_2(\Gamma_0(N))$ 에 대해 $\omega_f=2\pi i\,f(z)\,dz$ 는 $\Gamma_0(N)$ 불변이므로 $X_0(N)$ 위의 정칙 1형식이 된다. 적분

$$
\langle\{\alpha,\beta\},f\rangle=\int_\alpha^\beta 2\pi i\,f(z)\,dz
$$

는 $\alpha,\beta\in\mathbb P^1(\mathbb Q)$ (상반평면의 첨점) 사이의 경로를 따라 계산되고, $f$ 가 첨점에서 빠르게 죽으므로 수렴한다. 값은 경로의 호몰로지류에만 의존한다.

그러니 "형식의 공간" 을 다루는 대신 "경로의 공간" 을 다룰 수 있다. 후자는 위상적 대상이고, 위상은 조합론으로 계산된다. 이것이 전략의 전부다.

## 왜 첨점을 끝점으로 허용하는가

닫힌 경로만 쓰면 $H_1(X_0(N),\mathbb Z)\cong\mathbb Z^{2g}$ 이고, 이것이 $S_2$ 의 실수 구조를 준다. 그런데 계산하기에는 첨점을 끝점으로 허용하는 쪽이 훨씬 편하다. $\{\alpha,\beta\}$ 를 임의의 두 첨점을 잇는 측지선으로 두면 삼각 관계

$$
\{\alpha,\beta\}+\{\beta,\gamma\}+\{\gamma,\alpha\}=0
$$

가 성립해, 경로를 마음대로 자르고 붙일 수 있다. 대가는 군이 조금 커진다는 것뿐이다.

$$
\dim H_1(X_0(N),\text{첨점};\mathbb Q)=2g+c-1
$$

여기서 $c$ 는 첨점의 개수다. 닫힌 경로 부분 $2g$ 에 첨점 사이의 "여분" $c-1$ 이 붙은 꼴이고, 경계 사상의 핵을 취하면 원래의 $2g$ 로 돌아온다.

## Manin 의 유한 표현

임의의 $\{\alpha,\beta\}$ 를 어떻게 유한 생성원으로 쓸 것인가. 핵심은 연분수다. $\alpha$ 에서 $\beta$ 로 가는 경로를 연분수 수렴분을 따라 잘게 쪼개면, 각 조각이 $\{g\cdot0,\ g\cdot\infty\}$ 꼴이 된다($g\in\mathrm{SL}_2(\mathbb Z)$). 그리고 $\Gamma_0(N)$ 작용으로 나누면 $g$ 는 잉여류로만 기억되면 된다.

$$
\Gamma_0(N)\backslash\mathrm{SL}_2(\mathbb Z)\ \xrightarrow{\ \sim\ }\ \mathbb P^1(\mathbb Z/N),\qquad
\begin{pmatrix}a&b\\c&d\end{pmatrix}\longmapsto(c:d)
$$

그래서 생성원은 $\mathbb P^1(\mathbb Z/N)$ 의 원소 하나당 하나씩, 모두

$$
\#\mathbb P^1(\mathbb Z/N)=N\prod_{p\mid N}\Big(1+\frac1p\Big)=[\mathrm{SL}_2(\mathbb Z):\Gamma_0(N)]
$$

개다. 이 생성원을 **Manin 기호** $[x]$ ($x\in\mathbb P^1(\mathbb Z/N)$) 라 한다.

## 두 개의 관계식

$\mathrm{SL}_2(\mathbb Z)$ 는 $\sigma=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ 와 $\tau=\begin{pmatrix}0&-1\\1&-1\end{pmatrix}$ 로 생성되고 $\sigma^2=\tau^3=-I$ 다. 이 사실이 그대로 관계식이 된다.

$$
[x]+[x\sigma]=0,\qquad [x]+[x\tau]+[x\tau^2]=0
$$

첫 식은 경로 뒤집기 $\{0,\infty\}=-\{\infty,0\}$ 에서, 둘째 식은 $\{0,\infty\}+\{\infty,-1\}+\{-1,0\}=0$ 이라는 삼각 관계에서 온다. 놀라운 것은 **이 둘이 전부**라는 점이다. 다른 관계는 없다.

그러므로 모듈러 기호 공간은 유한 생성원 위의 유한 연립일차방정식의 해공간이고, 계산은 Gauss 소거다. 무한한 해석적 대상이 완전히 유한한 조합론으로 내려온다.

# 정의

## 모듈러 기호 공간

$\mathbb M_2$ 를 기호 $\{\alpha,\beta\}$ ($\alpha,\beta\in\mathbb P^1(\mathbb Q)$)가 생성하는 자유아벨군을 다음 관계로 나눈 것이라 하자.

$$
\{\alpha,\beta\}+\{\beta,\gamma\}+\{\gamma,\alpha\}=0
$$

(여기서 $\{\alpha,\alpha\}=0$ 과 $\{\alpha,\beta\}=-\{\beta,\alpha\}$ 가 따라 나온다.) $\mathrm{SL}_2(\mathbb Z)$ 가 $g\{\alpha,\beta\}=\{g\alpha,g\beta\}$ 로 작용하고, $\Gamma=\Gamma_0(N)$ 에 대해

$$
\mathbb M_2(\Gamma)=\big(\mathbb M_2\big)_\Gamma\quad(\Gamma\text{ 공변})
$$

를 $\Gamma$ 의 모듈러 기호 공간이라 한다. 경계 사상

$$
\partial\colon\mathbb M_2(\Gamma)\longrightarrow\mathbb Z[\text{첨점}],\qquad
\partial\{\alpha,\beta\}=(\beta)-(\alpha)
$$

의 핵 $\mathbb S_2(\Gamma)$ 가 **첨점 모듈러 기호**이며, 이것이 $H_1(X_0(N),\mathbb Z)$ 에 해당한다.

## Manin 기호

앞 절의 대응 $\Gamma_0(N)\backslash\mathrm{SL}_2(\mathbb Z)\cong\mathbb P^1(\mathbb Z/N)$ 아래에서 $x=(c:d)$ 에 대응하는 $g$ 를 잡아

$$
[x]=\{g\cdot0,\ g\cdot\infty\}\in\mathbb M_2(\Gamma_0(N))
$$

로 둔다. 여기서 $\mathrm{SL}_2(\mathbb Z)$ 는 $\mathbb P^1(\mathbb Z/N)$ 에 행벡터 우곱 $(c,d)\mapsto(c,d)M$ 으로 작용한다. Manin 의 정리는

$$
\mathbb M_2(\Gamma_0(N))\;\cong\;\frac{\bigoplus_{x\in\mathbb P^1(\mathbb Z/N)}\mathbb Z[x]}{\big([x]+[x\sigma],\ [x]+[x\tau]+[x\tau^2]\big)}
$$

이다[^1].

## Hecke 작용소

$T_p$ 는 Manin 기호 위에서 명시적 행렬들의 합으로 작용한다. $p\nmid N$ 일 때

$$
T_p[x]=\Big[x\begin{pmatrix}p&0\\0&1\end{pmatrix}\Big]+\sum_{r=0}^{p-1}\Big[x\begin{pmatrix}1&r\\0&p\end{pmatrix}\Big]
$$

로 쓰되, 각 항을 다시 Manin 기호로 환원해야 한다(행렬식이 $p$ 라 $\mathrm{SL}_2(\mathbb Z)$ 밖이기 때문이다). Merel 의 Heilbronn 행렬이 그 환원을 한 번에 해 준다. 어느 쪽이든 결과는 **정수 성분 행렬**이다.

## 무게 $k$ 로의 확장

무게 $k>2$ 에서는 계수를 가군으로 바꾼다. $V_{k-2}=\mathrm{Sym}^{k-2}(\mathbb Z^2)$ 를 $\mathrm{SL}_2$ 표현으로 두고 기호를 $P\otimes\{\alpha,\beta\}$ ($P\in V_{k-2}$) 로 확장하면 같은 이론이 그대로 작동한다. $k=2$ 는 $V_0=\mathbb Z$ 인 경우다.

# 성질

## 비교 정리

Eichler–Shimura 대응이 복소수 계수에서 다음을 준다.

$$
\mathbb S_k(\Gamma)\otimes\mathbb C\;\cong\;S_k(\Gamma)\oplus\overline{S_k(\Gamma)}
$$

$\mathbb M_k$ 전체로 가면 Eisenstein 부분이 더해진다. 차원으로 확인하면 $k=2$ 에서

$$
\dim_{\mathbb Q}\mathbb M_2(\Gamma_0(N))=2g+c-1,\qquad
\dim_{\mathbb Q}\mathbb S_2(\Gamma_0(N))=2g
$$

이고 $\dim S_2(\Gamma_0(N))=g$ 와 맞는다. 중요한 것은 이 동형이 Hecke 작용과 호환된다는 점이다. 그래서 모듈러 기호 위의 정수 행렬 $T_p$ 의 고유다항식이 곧 모듈러 형식의 Hecke 고유값을 준다.

## 복소켤레와 $\pm$ 분해

$\eta=\begin{pmatrix}-1&0\\0&1\end{pmatrix}$ 가 $\mathbb M_k$ 에 대합으로 작용하고, 이것이 $X_0(N)(\mathbb C)$ 위의 복소켤레에 해당한다. 고유공간으로 나누면

$$
\mathbb M_k=\mathbb M_k^+\oplus\mathbb M_k^-
$$

이고 각 조각의 차원이 절반이다. Hecke 고유값은 두 조각 어디서나 같게 나오므로, 실제 계산은 $+$ 쪽에서만 해 차원을 절반으로 줄인다. 새형식 열거가 실용적인 속도로 되는 이유가 여기에 있다.

## $L$ 값이 기호의 값이다

$f$ 가 무게 2 새형식일 때 기호 $\{0,\infty\}$ 와의 짝이 바로 $L$ 값이다.

$$
\langle\{0,\infty\},f\rangle=\int_0^{i\infty}2\pi i\,f(z)\,dz=L(f,1)
$$

일반적으로 $\{0,\alpha\}$ 꼴 기호가 꼬인 $L$ 값 $L(f,\chi,1)$ 을 주고, 무게 $k$ 에서는 $V_{k-2}$ 의 성분이 임계점 $L(f,j)$ ($1\le j\le k-1$) 를 준다. 게다가 이 값들은 주기 $\Omega_f^\pm$ 로 나누면 **유리수**이며, 그 유리수가 모듈러 기호 격자에서 직접 읽힌다. BSD 추측의 수치 검증이 이 성질 위에서 이루어진다.

## 정수 구조가 산술을 담는다

모듈러 기호는 $\mathbb Z$ 격자이고, 그 격자가 $S_2$ 의 $\mathbb C$ 벡터공간보다 많은 정보를 담는다. 대표적으로 새형식 $f$ 에 붙는 타원곡선 $E_f$ 의 Manin 상수, 주기 격자, Tamagawa 수 같은 양이 이 격자에서 나온다. 해석적 대상만 보면 사라지는 정보가 위상적 정수 구조에는 남아 있다.

# 활용

## 차원을 관계식만으로 계산한다

Manin 표현이 맞는지는 바로 확인할 수 있다. 생성원 $\mathbb P^1(\mathbb Z/N)$ 과 두 관계식만 써서 $\dim\mathbb M_2(\Gamma_0(N))$ 를 구하고, 알려진 종수·첨점 수와 대조하면 된다.

```python
from fractions import Fraction
from math import gcd

def p1(N):
    """P^1(Z/N) 의 대표원과 (c,d) -> 인덱스 사전. Gamma_0(N) 의 잉여류와 일대일."""
    reps, idx = [], {}
    for c in range(N):
        for d in range(N):
            if gcd(gcd(c, d), N) != 1 or (c, d) in idx:
                continue
            r = len(reps)
            reps.append((c, d))
            for u in range(N):                       # 단원배는 같은 류
                if gcd(u, N) == 1:
                    idx[(c*u % N, d*u % N)] = r
    return reps, idx

S = ((0, -1), (1,  0))       # sigma
T = ((0, -1), (1, -1))       # tau

def act(x, M, N):
    (c, d), ((a, b), (e, f)) = x, M
    return ((c*a + d*e) % N, (c*b + d*f) % N)        # 행벡터 우곱

def rank(rows, n):
    rows, r = [row[:] for row in rows], 0
    for col in range(n):
        p = next((i for i in range(r, len(rows)) if rows[i][col]), None)
        if p is None:
            continue
        rows[r], rows[p] = rows[p], rows[r]
        inv = 1 / rows[r][col]
        rows[r] = [v * inv for v in rows[r]]
        for i in range(len(rows)):
            if i != r and rows[i][col]:
                f = rows[i][col]
                rows[i] = [a - f*b for a, b in zip(rows[i], rows[r])]
        r += 1
    return r

def dim_modular_symbols(N):
    reps, idx = p1(N)
    n, rows = len(reps), []
    for i, x in enumerate(reps):
        row = [Fraction(0)]*n                        # [x] + [x·sigma] = 0
        row[i] += 1; row[idx[act(x, S, N)]] += 1
        rows.append(row)
        row = [Fraction(0)]*n                        # [x] + [x·tau] + [x·tau^2] = 0
        xt = act(x, T, N)
        row[i] += 1; row[idx[xt]] += 1; row[idx[act(xt, T, N)]] += 1
        rows.append(row)
    return n, n - rank(rows, n)

KNOWN = {1: (0, 1), 11: (1, 2), 14: (1, 4), 15: (1, 4), 17: (1, 2),
         19: (1, 2), 24: (1, 8), 37: (2, 2), 43: (3, 2), 53: (4, 2)}
for N, (g, c) in KNOWN.items():
    n, d = dim_modular_symbols(N)
    print(f"N={N:3d}  |P1(Z/N)|={n:3d}  dim M_2={d:3d}   2g+c-1={2*g+c-1:3d}   {d == 2*g+c-1}")
```

```
N=  1  |P1(Z/N)|=  1  dim M_2=  0   2g+c-1=  0   True
N= 11  |P1(Z/N)|= 12  dim M_2=  3   2g+c-1=  3   True
N= 14  |P1(Z/N)|= 24  dim M_2=  5   2g+c-1=  5   True
N= 15  |P1(Z/N)|= 24  dim M_2=  5   2g+c-1=  5   True
N= 17  |P1(Z/N)|= 18  dim M_2=  3   2g+c-1=  3   True
N= 19  |P1(Z/N)|= 20  dim M_2=  3   2g+c-1=  3   True
N= 24  |P1(Z/N)|= 48  dim M_2=  9   2g+c-1=  9   True
N= 37  |P1(Z/N)|= 38  dim M_2=  5   2g+c-1=  5   True
N= 43  |P1(Z/N)|= 44  dim M_2=  7   2g+c-1=  7   True
N= 53  |P1(Z/N)|= 54  dim M_2=  9   2g+c-1=  9   True
```

해석학은 한 줄도 쓰지 않았다. $\mathbb P^1(\mathbb Z/N)$ 위의 두 치환과 Gauss 소거만으로 $X_0(N)$ 의 종수가 나온다. $N=37$ 에서 $\dim S_2=g=2$ 이고, 실제로 이 준위에서 서로 다른 두 새형식(순위 0 과 순위 1 의 타원곡선에 대응)이 나온다.

## 타원곡선 표

Cremona 의 알고리즘은 여기에 Hecke 작용소를 얹는다. $\mathbb S_2^+(\Gamma_0(N))$ 위에서 $T_2,T_3,T_5,\dots$ 를 동시대각화해 1차원 고유공간을 찾으면 유리수 고유값을 갖는 새형식이 나오고, 그 형식에 대응하는 [타원곡선](elliptic-curves.md)의 주기 격자를 기호의 적분값으로 복원해 Weierstrass 방정식을 얻는다. 도체별 타원곡선 목록이 이렇게 만들어졌고, LMFDB 의 자료도 같은 방법의 확장이다.

## 모듈러성 판정

주어진 타원곡선 $E$ 가 도체 $N$ 의 새형식에서 오는지 확인하려면, $E$ 의 $a_p$ 를 몇 개 계산하고 모듈러 기호 공간에서 같은 고유값을 갖는 고유벡터를 찾으면 된다. 유한 개의 $p$ 만 봐도 충분하다는 것이 Sturm 한계의 내용이고, 이 때문에 판정이 유한 시간에 끝난다. 모듈러성 정리의 증명 이전에 수치적 증거를 쌓은 것이 이 계산이었다.

## $p$ 진 $L$ 함수로의 확장

Pollack–Stevens 의 **과수렴 모듈러 기호**는 계수 가군 $V_{k-2}$ 를 $p$ 진 분포 공간으로 바꾼 것이다. 고전 기호로의 특수화 사상이 작은 기울기 고유공간에서 동형이 되고(Stevens 의 조절 정리), 그 올림이 $p$ 진 $L$ 함수를 직접 준다. 고전 $L$ 값의 보간으로 $p$ 진 $L$ 함수를 정의하던 방식과 달리 구성이 유한 계산이라, Iwasawa 이론의 수치 실험이 가능해졌다.

같은 틀이 다른 군으로도 옮겨 간다. 허수이차체 위의 Bianchi 모듈러 기호, 전실체 위의 Hilbert 모듈러 기호가 각각 해당 준위 구조의 $\mathbb P^1$ 위에서 같은 관계식을 갖는다.

[^1]: Yu. Manin, *Parabolic points and zeta functions of modular curves*, Izv. Akad. Nauk SSSR (1972) 가 유한 표현을 준 원논문이다. 알고리즘 전반은 J. Cremona, *Algorithms for Modular Elliptic Curves* (2판, 1997) 2–3장과 W. Stein, *Modular Forms: A Computational Approach* (2007) 8장에 정리되어 있다. Hecke 작용소의 Heilbronn 행렬 구현은 L. Merel, *Universal Fourier expansions of modular forms* (1994). 본문의 차원 계산은 직접 한 것이다.

# 연관 문서

## 선수지식

- [모듈러 곡선 X_0(N)](modular-curves.md)
- [Hecke 작용소와 새형식](hecke-operators.md)

## 더 알아보기

- [Merel 의 일양 유계성 정리](merel-theorem.md)

#number_theory #computation #algebraic_topology
