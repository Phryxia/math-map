# Reed–Solomon 부호

# 개요

**Reed–Solomon 부호(Reed–Solomon code)** 는 [유한체](finite-fields.md) $\mathbb F_q$ 위에서 차수가 $k$ 보다 작은 다항식을 서로 다른 점 $n$ 개에서 평가한 값의 열을 부호어로 삼는 선형부호다. 매개변수는 $[n,k,n-k+1]\_q$ 이고 Singleton 한계를 등호로 달성한다.[^1]

복호는 오류가 난 자리에서 $0$ 이 되는 오류 위치 다항식을 찾는 문제로 바뀐다. 신드롬이 그 다항식을 연결 다항식으로 하는 선형 점화식을 만족하므로 [Berlekamp–Massey 알고리즘](berlekamp-massey.md)이 $\lfloor(n-k)/2\rfloor$ 개까지의 오류를 $O(n^2)$ 에 고친다.

# 직관

$\mathbb F_7$ 에서 $k=2$, $n=6$ 으로 둔다. 메시지 $(3,2)$ 를 일차식 $f(x)=3+2x$ 로 보고 $x=1,\dots,6$ 에서 평가하면 부호어 $(5,0,2,4,6,1)$ 이 나온다. 세 번째 자리가 $2$ 에서 $5$ 로 바뀌어 $(5,0,5,4,6,1)$ 을 받았다고 하자.

오류의 자리를 알면 그 자리를 버리고 남은 다섯 점 가운데 두 점으로 직선을 정하면 된다. 자리를 모르므로, 오류 자리에서 $0$ 이 되는 일차식 $E(x)=x+e\_0$ 을 미지수로 둔다. 모든 $i$ 에서 $y\_iE(i)=f(i)E(i)$ 가 성립한다. 오류 자리에서는 양변이 $0$ 이고, 나머지 자리에서는 $y\_i=f(i)$ 이기 때문이다.

$Q=fE$ 는 차수 $2$ 이하의 다항식 $q\_0+q\_1x+q\_2x^2$ 이다. 미지수 $e\_0,q\_0,q\_1,q\_2$ 넷에 대해 식 $y\_i(i+e\_0)=Q(i)$ 가 여섯 개 있고, 모두 일차식이다. 풀면 $E(x)=x+4=x-3$, $Q(x)=2x^2+4x+5$ 가 나오고, $Q/E=3+2x$ 로 메시지가 복원된다. $E$ 의 근 $3$ 이 오류의 자리다.

# 정의

## 평가 부호

$\alpha\_1,\dots,\alpha\_n\in\mathbb F_q$ 는 서로 다른 원소이고 $k\le n\le q$ 다. Reed–Solomon 부호는

$$
\mathrm{RS}\_k=\bigl\lbrace(f(\alpha\_1),\dots,f(\alpha\_n)) : f\in\mathbb F_q\lbrack x\rbrack,\thinspace\deg f\lt k\bigr\rbrace
$$

다. 평가는 선형사상이고, $0$ 이 아닌 $f$ 는 근이 $k-1$ 개 이하이므로 부호어의 무게가 $n-k+1$ 이상이다. 그러므로 [오류정정부호](error-correcting-codes.md)의 정정 능력은 $t=\lfloor(n-k)/2\rfloor$ 다.

## 순환 부호로서의 표현

$\alpha$ 를 $\mathbb F_q^\times$ 의 생성원, $n=q-1$, $\alpha\_i=\alpha^{i-1}$ 로 잡는다. 부호어 $c=(c\_0,\dots,c\_{n-1})$ 을 다항식 $c(x)=\sum c\_ix^i$ 로 쓰면

$$
c(\alpha^j)=\sum_{i=0}^{n-1}f(\alpha^i)\alpha^{ij}=\sum_{m\lt k}f\_m\sum_{i=0}^{n-1}\alpha^{i(m+j)}
$$

이다. 안쪽 합은 $m+j\equiv 0\pmod n$ 일 때만 $0$ 이 아니고, $1\le j\le n-k$ 이면 그런 $m$ 은 $k$ 이상이다. 그러므로 $j=1,\dots,n-k$ 에서 $c(\alpha^j)=0$ 이고, 부호는 $g(x)=\prod_{j=1}^{n-k}(x-\alpha^j)$ 의 배수 전체다.

## 신드롬과 오류 위치 다항식

받은 단어를 $r=c+e$ 로 쓰고 오류가 자리 $i\_1,\dots,i\_\nu$ 에 있다고 하자. $X\_\ell=\alpha^{i\_\ell}$ 을 오류 위치, $Y\_\ell=e\_{i\_\ell}$ 을 오류 값이라 한다. **신드롬(syndrome)** 은

$$
S\_j=r(\alpha^j)=e(\alpha^j)=\sum_{\ell=1}^{\nu}Y\_\ell X\_\ell^j\qquad(j=1,\dots,2t)
$$

다. **오류 위치 다항식(error locator polynomial)** 은 $\Lambda(x)=\prod_{\ell=1}^{\nu}(1-X\_\ell x)=1+\Lambda\_1x+\dots+\Lambda\_\nu x^\nu$ 다.

## 복호

1. 신드롬 $S\_1,\dots,S\_{2t}$ 를 계산한다. 모두 $0$ 이면 $r$ 이 부호어다.
2. Berlekamp–Massey 알고리즘으로 $S\_1,\dots,S\_{2t}$ 의 연결 다항식을 구한다. 이것이 $\Lambda$ 다.
3. $i=0,\dots,n-1$ 에서 $\Lambda(\alpha^{-i})=0$ 인지 보아 오류 자리를 찾는다. 이 전수 검사를 Chien 탐색(Chien search)이라 한다.
4. $\Omega(x)\equiv S(x)\Lambda(x)\pmod{x^{2t}}$, $S(x)=\sum_{j=1}^{2t}S\_jx^{j-1}$ 로 두고 Forney 공식(Forney's formula) $Y\_\ell=-\Omega(X\_\ell^{-1})/\Lambda'(X\_\ell^{-1})$ 로 오류 값을 구한다.

```javascript
// syndromes, berlekampMassey, chienSearch, forney 는 위 네 단계다. 모든 연산은 GF(q) 에서 한다.
function decodeRS(r, n, k, field) {
  const t = Math.floor((n - k) / 2);
  const S = syndromes(r, 2 * t, field);           // S[0..2t-1] = r(alpha^1..alpha^2t)
  if (S.every((s) => field.isZero(s))) return r;
  const { C: Lambda, L } = berlekampMassey(S, field);
  if (L > t) return null;                         // 정정 능력을 넘었다
  const X = chienSearch(Lambda, n, field);        // 오류 자리
  if (X.length !== L) return null;
  const Y = forney(S, Lambda, X, 2 * t, field);   // 오류 값
  const c = r.slice();
  X.forEach((pos, l) => { c[pos] = field.sub(c[pos], Y[l]); });
  return c;
}
```

# 성질

## 신드롬의 점화식

**명제.** $\nu\lt j\le 2t$ 이면 $S\_j+\Lambda\_1S\_{j-1}+\dots+\Lambda\_\nu S\_{j-\nu}=0$ 이다.

증명의 요지. $\Lambda(X\_\ell^{-1})=0$ 이므로 $\sum_{i=0}^{\nu}\Lambda\_iX\_\ell^{-i}=0$ 이다. 양변에 $Y\_\ell X\_\ell^j$ 를 곱해 $\ell$ 에 대해 더하면 $\sum_i\Lambda\_iS\_{j-i}=0$ 이다.

$\nu\le t$ 이면 신드롬 $2t$ 개의 선형 복잡도는 $\nu$ 이고, Berlekamp–Massey 알고리즘의 처음 $2L$ 항 유일성으로 2 단계가 내놓는 연결 다항식이 $\Lambda$ 와 같다.

## 핵심 방정식

$S(x)$ 를 $\sum_\ell Y\_\ell X\_\ell/(1-X\_\ell x)$ 의 $x^{2t}$ 미만 부분으로 보면

$$
\Omega(x)=\sum_{\ell=1}^{\nu}Y\_\ell X\_\ell\prod_{m\ne\ell}(1-X\_mx)
$$

이고 $\deg\Omega\lt\nu$ 다. $\Omega\equiv S\Lambda\pmod{x^{2t}}$ 를 **핵심 방정식(key equation)** 이라 한다. $x=X\_\ell^{-1}$ 을 넣으면 $\Omega$ 의 합에서 한 항만 남고, $\Lambda'(X\_\ell^{-1})=-X\_\ell\prod_{m\ne\ell}(1-X\_m/X\_\ell)$ 이므로 Forney 공식이 나온다. 핵심 방정식은 $x^{2t}$ 와 $S$ 에 확장된 [유클리드 알고리즘](euclidean-algorithm.md)을 적용해 나머지의 차수가 $t$ 아래로 처음 내려가는 단계에서도 풀린다.

## Berlekamp–Welch 복호

직관 절의 방법을 일반화한 것이다. $e\le t$ 개의 오류가 있을 때, 일계수 $\deg E=e$ 와 $\deg Q\lt k+e$ 인 다항식으로 $y\_iE(\alpha\_i)=Q(\alpha\_i)$ ($i=1,\dots,n$) 을 푸는 일차연립방정식은 해가 있고, 어느 해에서나 $Q/E=f$ 다.[^2]

증명의 요지. 오류 자리에서 $0$ 이 되는 $E$ 와 $Q=fE$ 가 해다. 두 해 $(E\_1,Q\_1)$, $(E\_2,Q\_2)$ 에서 $Q\_1E\_2-Q\_2E\_1$ 은 차수가 $k+2e-1\le n-1$ 이하이고 $n$ 개의 점 모두에서 $0$ 이므로 영다항식이다.

## 오류와 소실

위치를 아는 소실 $s$ 개와 위치를 모르는 오류 $e$ 개는 $2e+s\le n-k$ 이면 함께 고쳐진다. 소실 자리를 빼고 남은 $n-s$ 자리는 매개변수 $[n-s,k,n-s-k+1]$ 의 Reed–Solomon 부호를 이루기 때문이다. 소실만 있으면 남은 $k$ 자리에서 [다항식 보간](polynomial-interpolation.md)으로 $f$ 를 얻는다.

## 목록 복호

$t$ 보다 많은 오류가 있으면 가까운 부호어가 여럿일 수 있다. 받은 단어에서 거리 $\tau$ 안의 부호어를 모두 내놓는 것을 목록 복호(list decoding)라 한다. Guruswami–Sudan 알고리즘(Guruswami–Sudan algorithm)은 이변수 다항식 $Q(x,y)$ 가 점 $(\alpha\_i,y\_i)$ 에서 높은 중복도로 $0$ 이 되게 보간하고 $y-f(x)$ 꼴 인수를 찾아, $\tau\lt n-\sqrt{nk}$ 인 범위의 부호어를 다항식 시간에 모두 구한다.[^3]

# 활용

- **저장 매체와 QR 코드.** QR 코드는 $\mathbb F\_{256}$ 위의 Reed–Solomon 부호를 써서 그림의 일부가 가려지거나 찢겨도 읽힌다. CD 는 두 Reed–Solomon 부호를 교차로 끼워 넣어, 긁힘으로 연달아 생긴 오류를 한 부호의 소실들로 흩는다.
- **우주 통신.** 우주 자료 시스템 자문 위원회(Consultative Committee for Space Data Systems, CCSDS)의 표준 부호는 $\mathbb F\_{256}$ 위의 $\lbrack 255,223,33\rbrack$ 부호로 기호 $16$ 개의 오류를 고친다.
- **비밀 분산과 분산 저장.** Shamir 의 [비밀 분산](secret-sharing.md)에서 조각 $n$ 개는 Reed–Solomon 부호어이므로, 거짓 조각이 섞여도 이 부호의 복호로 비밀을 복원한다. 데이터를 $n$ 조각으로 나누어 아무 $k$ 조각에서나 복원하는 분산 저장도 소실 복호다.

[^1]: I. S. Reed, G. Solomon, "Polynomial codes over certain finite fields", *Journal of the Society for Industrial and Applied Mathematics* 8 (1960), 300–304.
[^2]: L. R. Welch, E. R. Berlekamp, "Error correction for algebraic block codes", US Patent 4,633,470 (1986). 교과서의 서술은 V. Guruswami, A. Rudra, M. Sudan, *Essential Coding Theory* 에 있다.
[^3]: V. Guruswami, M. Sudan, "Improved decoding of Reed–Solomon and algebraic-geometry codes", *IEEE Transactions on Information Theory* 45 (1999), 1757–1767.

# 연관 문서

## 선수지식

- [오류정정부호](error-correcting-codes.md)
- [Berlekamp–Massey 알고리즘](berlekamp-massey.md)

## 더 알아보기

- [BCH 부호](bch-codes.md)

#information_theory #field_theory #algorithms
