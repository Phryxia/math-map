# Gröbner 기저

# 개요

**Gröbner 기저(Gröbner basis)** 는 여러 변수 다항식의 아이디얼을 생성하는 다항식들을, 나눗셈의 나머지가 하나로 정해지도록 다시 고른 모임이다. 연립방정식 $xy=1$, $y^2=1$ 이 주어졌을 때 $x=y$ 가 따라 나오는지 묻는 문제가 이 꼴이다. $x-y$ 를 $xy-1$ 과 $y^2-1$ 로 나누어 나머지가 $0$ 이면 따라 나온다고 하고 싶지만, 두 변수에서는 나누는 순서에 따라 나머지가 달라진다.

Gröbner 기저로 나누면 나머지가 순서에 무관하게 하나로 정해지고, 나머지가 $0$ 인 것과 아이디얼에 속하는 것이 동치가 된다.

# 직관

한 변수 다항식은 하나로 나누면 몫과 나머지가 하나로 정해진다. $x^3-1$ 을 $x-1$ 로 나누면 나머지가 $0$ 이고, $x^3-1$ 이 $x-1$ 의 배수다.

두 변수 $x,y$ 에서 $h=xy^2-x$ 를 $f\_1=xy-1$ 과 $f\_2=y^2-1$ 로 나눈다. 항의 크기는 $x$ 의 지수를 먼저 비교하고, 같으면 $y$ 의 지수를 비교한다. $f\_1$ 부터 쓰면 $h$ 의 가장 큰 항 $xy^2$ 가 $y\cdot xy$ 이므로 $h-yf\_1=y-x$ 가 남는다. 그 가장 큰 항 $x$ 는 $xy$ 로도 $y^2$ 로도 나누어떨어지지 않으므로 나눗셈이 끝나고 나머지는 $y-x$ 다.

같은 $h$ 를 $f\_2$ 부터 쓰면 $xy^2=x\cdot y^2$ 이므로 $h-xf\_2=0$ 이고 나머지는 $0$ 이다. $h=xf\_2$ 이므로 $h$ 는 $f\_1,f\_2$ 가 생성하는 아이디얼에 속하는데, 앞의 순서로는 나머지가 $0$ 이 아니었다.

두 나머지의 차 $y-x$ 는 $yf\_1-xf\_2$ 로 적히므로 아이디얼에 속한다. 그런데 그 가장 큰 항 $x$ 가 $xy$ 와 $y^2$ 어느 것으로도 나누어떨어지지 않아 나눗셈이 이것을 지우지 못한다. 그래서 $f\_3=x-y$ 를 생성원에 더한다.

그러면 $\lbrace f\_1,f\_2,f\_3\rbrace$ 로는 어떤 순서로 나누어도 $h$ 의 나머지가 $0$ 이다. 이렇게 고친 생성원 모임이 Gröbner 기저다.

# 정의

## 단항식 순서

$n$ 변수 단항식 $x^\alpha=x\_1^{\alpha\_1}\cdots x\_n^{\alpha\_n}$ 전체 위의 전순서 $\succ$ 가 다음 두 조건을 만족하면 **단항식 순서(monomial order)** 라 한다.

- $x^\alpha\succ x^\beta$ 이면 모든 단항식 $x^\gamma$ 에 대해 $x^{\alpha}x^{\gamma}\succ x^{\beta}x^{\gamma}$ 다.
- 모든 공집합 아닌 단항식 집합에 가장 작은 원소가 있다.

$\alpha\_i\ne\beta\_i$ 인 첫 $i$ 에서 $\alpha\_i\gt\beta\_i$ 이면 $x^\alpha\succ x^\beta$ 로 두는 순서를 **사전식 순서(lexicographic order)** 라 한다. 직관 절에서 쓴 순서가 $x\succ y$ 인 사전식 순서이고, $x\succ y^3$ 이다.

## 선두항과 나눗셈

0 이 아닌 다항식 $f$ 의 항 가운데 단항식 순서로 가장 큰 것을 **선두항(leading term)** $\mathrm{LT}(f)$ 라 한다. $\mathrm{LT}(xy-1)=xy$, $\mathrm{LT}(y-x)=-x$ 다.

다항식 $f$ 와 $f\_1,\dots,f\_s$ 에 대해 남은 다항식의 선두항이 어떤 $\mathrm{LT}(f\_i)$ 로 나누어떨어지면 그 배수를 빼고, 아니면 선두항을 나머지로 옮기는 일을 되풀이하면 다음 꼴이 나온다.

$$
f=q\_1f\_1+\cdots+q\_sf\_s+r
$$

여기서 $r$ 의 어느 항도 $\mathrm{LT}(f\_i)$ 로 나누어떨어지지 않는다. $r$ 을 $f$ 를 $f\_1,\dots,f\_s$ 로 나눈 **나머지(remainder)** 라 한다. 직관 절에서 보았듯이 $r$ 은 $f\_i$ 를 쓰는 순서에 따라 달라질 수 있다.

## Gröbner 기저

아이디얼 $I$ 에 대해 $I$ 의 원소의 선두항 전체가 생성하는 아이디얼을 **선두항 아이디얼(initial ideal)** $\mathrm{in}(I)$ 라 한다. $I$ 의 유한 부분집합 $G=\lbrace g\_1,\dots,g\_t\rbrace$ 가 다음을 만족하면 $G$ 를 $I$ 의 **Gröbner 기저** 라 한다.

$$
\mathrm{in}(I)=\bigl(\mathrm{LT}(g\_1),\dots,\mathrm{LT}(g\_t)\bigr)
$$

직관 절의 $I=(xy-1,y^2-1)$ 에서 $\lbrace xy-1,y^2-1\rbrace$ 는 Gröbner 기저가 아니다. $x-y\in I$ 의 선두항 $x$ 가 $(xy,y^2)$ 에 속하지 않는다. $\lbrace xy-1,y^2-1,x-y\rbrace$ 는 Gröbner 기저이고, 이것은 아래 Buchberger 판정법으로 확인된다.

## S 다항식

$f,g$ 의 선두 단항식의 최소공배수를 $x^\gamma$ 라 할 때 다음을 $f,g$ 의 **S 다항식(S-polynomial)** 이라 한다.

$$
S(f,g)=\frac{x^\gamma}{\mathrm{LT}(f)}\thinspace f-\frac{x^\gamma}{\mathrm{LT}(g)}\thinspace g
$$

두 선두항이 서로 지워지도록 맞춰 뺀 것이다. 직관 절에서 더한 $f\_3$ 이 다음 S 다항식이다.

$$
S(xy-1,y^2-1)=y(xy-1)-x(y^2-1)=x-y
$$

## 축소 Gröbner 기저

Gröbner 기저 $G$ 의 각 원소의 선두 계수가 $1$ 이고, 각 $g\in G$ 의 어느 항도 다른 원소의 선두항으로 나누어떨어지지 않으면 $G$ 를 **축소 Gröbner 기저(reduced Gröbner basis)** 라 한다. $\lbrace xy-1,y^2-1,x-y\rbrace$ 에서 $xy$ 는 $x$ 로 나누어떨어지므로 $xy-1$ 을 $x-y$ 로 나누면 $y^2-1$ 이 남아 이미 있는 원소가 된다. 그래서 축소 Gröbner 기저는 $\lbrace x-y,\ y^2-1\rbrace$ 다.

# 성질

## 존재

정리. 다항식환의 모든 아이디얼 $I\ne0$ 은 Gröbner 기저를 갖고, Gröbner 기저는 $I$ 를 생성한다.

증명의 요지. [Noether 환](noetherian-rings.md)의 Hilbert 기저정리로 $\mathrm{in}(I)$ 는 유한 개의 다항식으로 생성되고, 단항식 아이디얼이므로 유한 개의 선두항 $\mathrm{LT}(g\_1),\dots,\mathrm{LT}(g\_t)$ 로 생성된다. $f\in I$ 를 $g\_1,\dots,g\_t$ 로 나눈 나머지 $r$ 은 $I$ 에 속하는데, $r\ne0$ 이면 $\mathrm{LT}(r)\in\mathrm{in}(I)$ 가 어떤 $\mathrm{LT}(g\_i)$ 로 나누어떨어져 나머지의 조건에 어긋난다. 그래서 $r=0$ 이고 $f$ 는 $g\_i$ 의 결합이다.

## 나머지의 유일성

정리. $G$ 가 $I$ 의 Gröbner 기저이면, $f$ 를 $G$ 로 나눈 나머지는 원소를 쓰는 순서와 무관하게 하나로 정해진다. 특히 $f\in I$ 인 것과 나머지가 $0$ 인 것이 동치다.

두 나머지 $r,r'$ 의 차는 $I$ 에 속하고, 그 어느 항도 $\mathrm{LT}(g\_i)$ 로 나누어떨어지지 않는다. $r-r'\ne0$ 이면 선두항이 $\mathrm{in}(I)$ 에 속해야 하므로 $r=r'$ 이다. 같은 논법으로, $\mathrm{in}(I)$ 에 속하지 않는 단항식들이 몫환 $k\lbrack x\_1,\dots,x\_n\rbrack/I$ 의 기저가 된다. 직관 절의 $I$ 에서는 $\mathrm{in}(I)=(x,y^2)$ 이므로 몫환의 기저는 $1,y$ 이다.

## Buchberger 판정법

정리. $G=\lbrace g\_1,\dots,g\_t\rbrace$ 가 아이디얼 $I$ 를 생성할 때, $G$ 가 Gröbner 기저인 것과 모든 $i\lt j$ 에 대해 $S(g\_i,g\_j)$ 를 $G$ 로 나눈 나머지가 $0$ 인 것이 동치다. 이것을 **Buchberger 판정법(Buchberger's criterion)** 이라 한다[^1][^2].

$G=\lbrace xy-1,y^2-1,x-y\rbrace$ 에서 세 S 다항식을 확인한다. $S(xy-1,y^2-1)=x-y$ 는 $G$ 의 원소이므로 나머지가 $0$ 이다. 나머지 둘은 다음과 같다.

$$
\begin{aligned}
S(xy-1,x-y)&=(xy-1)-y(x-y)=y^2-1\cr
S(y^2-1,x-y)&=x(y^2-1)-y^2(x-y)=y^3-x
\end{aligned}
$$

첫째는 $G$ 의 원소이므로 나머지가 $0$ 이다. 둘째의 선두항은 $-x$ 이다. $x-y$ 를 더하면 $y^3-y=y(y^2-1)$ 이 남고 나머지가 $0$ 이다.

## Buchberger 알고리즘

판정법이 실패하는 S 다항식의 나머지를 생성원에 더하는 일을 되풀이하면 Gröbner 기저가 나온다. 이것을 **Buchberger 알고리즘(Buchberger's algorithm)** 이라 한다[^1].

```javascript
function buchberger(F, order) {
  const G = [...F];
  const pairs = allPairs(G);
  while (pairs.length > 0) {
    const [f, g] = pairs.pop();
    const r = remainder(sPolynomial(f, g, order), G, order);
    if (!r.isZero()) {
      for (const h of G) pairs.push([h, r]);
      G.push(r);
    }
  }
  return G;
}
```

새 나머지 $r$ 의 선두항은 그때까지의 선두항 아이디얼에 속하지 않으므로, 더할 때마다 선두항 아이디얼이 진짜로 커진다. Hilbert 기저정리로 이 오름사슬이 멈추므로 알고리즘은 끝난다. 직관 절의 $F=\lbrace xy-1,y^2-1\rbrace$ 에서는 $x-y$ 를 한 번 더하고 끝난다.

## 소거 정리

정리. $x\_1\succ\cdots\succ x\_n$ 인 사전식 순서에서 $G$ 가 $I$ 의 Gröbner 기저이면, $G\cap k\lbrack x\_{l+1},\dots,x\_n\rbrack$ 는 $I\cap k\lbrack x\_{l+1},\dots,x\_n\rbrack$ 의 Gröbner 기저다. 이것을 **소거 정리(elimination theorem)** 라 한다[^2].

축소 Gröbner 기저 $\lbrace x-y,\ y^2-1\rbrace$ 에서 $x$ 가 없는 원소는 $y^2-1$ 이다. 그래서 $xy=1$, $y^2=1$ 의 해는 $y=\pm1$ 이고, $x-y=0$ 에서 해는 $(1,1)$, $(-1,-1)$ 이다.

## 특수한 경우

- 한 변수에서 아이디얼 $(f\_1,\dots,f\_s)$ 의 축소 Gröbner 기저는 $f\_i$ 의 최대공약수 하나이고, Buchberger 알고리즘은 [유클리드 알고리즘](euclidean-algorithm.md)과 같은 계산을 한다.
- 모든 $f\_i$ 가 일차식이면 축소 Gröbner 기저는 계수 행렬을 [Gauss 소거법](gaussian-elimination.md)으로 만든 기약 행 사다리꼴(reduced row echelon form)의 영 아닌 행들이다.

## 계산량

변수가 $n$ 개이고 생성원의 차수가 $d$ 이하일 때 축소 Gröbner 기저의 원소의 차수는 $d^{2^n}$ 꼴의 상한을 갖는다[^4]. Mayr 와 Meyer 는 아이디얼 소속 문제에 지수 크기의 공간이 필요한 아이디얼의 족을 구성했고, 이 족에서 Gröbner 기저의 차수가 실제로 이중 지수로 커진다[^3].

# 활용

- 연립 다항식 풀이. 사전식 순서의 Gröbner 기저는 소거 정리로 마지막 변수만 남은 방정식을 주고, 거기서 한 변수씩 거슬러 올라가 해를 구한다.
- [Macaulay 정리](macaulay-theorem.md). 증명의 첫 단계에서 $\mathrm{in}(I)$ 에 속하지 않는 단항식이 몫환의 기저라는 성질로 동차 아이디얼의 [Hilbert 함수](hilbert-functions.md)를 단항식 아이디얼의 것으로 바꾼다.
- 대수다양체의 매개변수 표현에서 방정식 구하기. $x=t^2$, $y=t^3$ 에서 $t$ 를 소거하면 $y^2=x^3$ 이 나온다. $(x-t^2,y-t^3)$ 의 $t\succ x\succ y$ 사전식 Gröbner 기저에서 $t$ 가 없는 원소가 이 식이다.

[^1]: B. Buchberger, *Ein Algorithmus zum Auffinden der Basiselemente des Restklassenringes nach einem nulldimensionalen Polynomideal*, 박사 학위 논문, Universität Innsbruck, 1965.
[^2]: D. A. Cox, J. Little, D. O'Shea, *Ideals, Varieties, and Algorithms*, 4th ed., Springer, 2015, 2 장과 3 장 1 절.
[^3]: E. W. Mayr, A. R. Meyer, "The complexity of the word problems for commutative semigroups and polynomial ideals", *Advances in Mathematics* 46 (1982), 305–329.
[^4]: T. W. Dubé, "The structure of polynomial ideals and Gröbner bases", *SIAM Journal on Computing* 19 (1990), 750–775.

# 연관 문서

## 선수지식

- [다항식환](polynomial-rings.md)
- [Noether 환](noetherian-rings.md)

## 더 알아보기

- [0 차원 아이디얼](zero-dimensional-ideals.md)

#ring_theory #algebra #algorithms #computation
