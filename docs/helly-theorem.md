# Helly 정리

# 개요

**Helly 정리(Helly's theorem)** 는 볼록집합 여러 개가 다 함께 겹치는지를 몇 개씩만 확인해서 알 수 있다는 정리다. 수직선 위에 구간 열 개가 있고 어느 두 구간을 골라도 겹친다고 하자. 왼쪽 끝점 가운데 가장 큰 것은 오른쪽 끝점 가운데 가장 작은 것보다 크지 않으므로, 그 점을 열 구간이 모두 지난다. Helly 정리는 $d$ 차원의 볼록집합에서 확인할 개수가 $d+1$ 임을 보인다.

# 직관

Helly 정리는 $\mathbb R^d$ 의 볼록집합 유한개 가운데 어느 $d+1$ 개를 골라도 공통점이 있으면 전체에 공통점이 있다는 정리다. Helly 가 1913 년에 증명했고 1923 년에 발표했다.[^1]

같은 수 $d+1$ 이 [볼록성](convexity.md)의 Radon 정리(Radon's theorem)와 Carathéodory 정리(Carathéodory's theorem)에도 나타나고, 세 정리는 모두 $\mathbb R^d$ 의 점 $d+2$ 개가 아핀 종속이므로 증명된다.

수직선 위의 닫힌 구간 $\lbrack a_1,b_1\rbrack,\dots,\lbrack a_n,b_n\rbrack$ 에서 어느 두 개도 겹친다고 한다. $a_i$ 가운데 가장 큰 것을 $a_k$, $b_j$ 가운데 가장 작은 것을 $b_l$ 이라 하면 $\lbrack a_k,b_k\rbrack$ 와 $\lbrack a_l,b_l\rbrack$ 이 겹치므로 $a_k\le b_l$ 이다. 그러면 점 $a_k$ 가 모든 구간에 들어 있다. $d=1$ 에서는 두 개씩 겹치는 것으로 충분하다.

평면에서는 두 개씩으로 부족하다. 삼각형의 세 변을 세 볼록집합으로 잡으면 어느 두 변도 꼭짓점에서 만나지만 세 변 모두에 들어가는 점은 없다. Helly 정리는 평면에서 세 개씩 공통점이 있으면 충분하다고 말한다.

# 정의

## 아핀 종속

$\mathbb R^d$ 의 점 $x_1,\dots,x_m$ 이 **아핀 종속(affinely dependent)** 이라는 것은 모두 $0$ 은 아닌 실수 $\lambda_1,\dots,\lambda_m$ 이 있어

$$
\sum_{i=1}^m\lambda_ix_i=0,\qquad\sum_{i=1}^m\lambda_i=0
$$

인 것이다. 두 식은 $\mathbb R^{d+1}$ 의 벡터 $(x_i,1)$ 들의 일차종속과 같으므로, $m\ge d+2$ 이면 항상 아핀 종속이다.

## 볼록 껍질

집합 $S\subseteq\mathbb R^d$ 의 **볼록 껍질(convex hull)** $\mathrm{conv}(S)$ 는 $S$ 를 포함하는 가장 작은 볼록집합이고, $S$ 의 유한개 점의 볼록 결합 $\sum\mu_ix_i$ $(\mu_i\ge0,\ \sum\mu_i=1)$ 전체와 같다.

# 성질

## Radon 정리

**정리(Radon, 1921).** $\mathbb R^d$ 의 점 $d+2$ 개는 두 부분 $I,J$ 로 나누어 $\mathrm{conv}(x_I)\cap\mathrm{conv}(x_J)\ne\varnothing$ 이 되게 할 수 있다.[^2]

증명. 아핀 종속 관계 $\sum\lambda_ix_i=0$, $\sum\lambda_i=0$ 을 잡고 $I=\lbrace i:\lambda_i\gt 0\rbrace$, $J=\lbrace i:\lambda_i\le0\rbrace$ 로 둔다. $s=\sum_{i\in I}\lambda_i\gt 0$ 이면

$$
p=\sum_{i\in I}\frac{\lambda_i}{s}x_i=\sum_{j\in J}\frac{-\lambda_j}{s}x_j
$$

이고 양변이 각각 $x_I$ 와 $x_J$ 의 볼록 결합이다.

## Helly 정리

**정리(Helly).** $C_1,\dots,C_n\subseteq\mathbb R^d$ 가 볼록집합이고 $n\ge d+1$ 이며, 어느 $d+1$ 개도 공통점을 가지면 $C_1\cap\cdots\cap C_n\ne\varnothing$ 이다.

증명. $n$ 에 대한 귀납이다. $n=d+1$ 은 가정이다. $n\ge d+2$ 이면 귀납 가정으로 $C_i$ 하나만 뺀 $n-1$ 개의 공통점 $x_i$ 가 있다. 점 $x_1,\dots,x_n$ 에 Radon 정리를 적용해 $p\in\mathrm{conv}(x_I)\cap\mathrm{conv}(x_J)$ 를 잡는다. $k\in I$ 이면 $j\in J$ 인 $x_j$ 는 모두 $C_k$ 에 들어 있으므로 $p\in\mathrm{conv}(x_J)\subseteq C_k$ 다. $k\in J$ 이면 같은 이유로 $p\in\mathrm{conv}(x_I)\subseteq C_k$ 다. 따라서 $p$ 가 모든 $C_k$ 에 들어 있다.

## 무한 모임

볼록집합이 무한히 많으면 정리가 성립하지 않는다. 수직선의 구간 $\lbrack m,\infty)$, $m=1,2,\dots$ 는 유한개씩은 언제나 공통점이 있지만 전체의 공통점은 없다. 집합이 모두 [콤팩트](compactness.md)하면 유한 교집합 성질(finite intersection property)에 따라 무한 모임에서도 성립한다.

## Carathéodory 정리

**정리(Carathéodory, 1907).** $x\in\mathrm{conv}(S)$, $S\subseteq\mathbb R^d$ 이면 $x$ 는 $S$ 의 점 많아야 $d+1$ 개의 볼록 결합이다.[^3]

증명의 요지. $x=\sum_{i=1}^m\mu_ix_i$ 이고 $m\ge d+2$ 이면 아핀 종속 관계 $\sum\lambda_ix_i=0$, $\sum\lambda_i=0$ 이 있다. $\lambda_i\gt 0$ 인 $i$ 가운데 $\mu_i/\lambda_i$ 가 가장 작은 값 $t$ 를 잡아 $\mu_i-t\lambda_i$ 로 바꾸면 계수가 음이 되지 않고 합이 $1$ 이며 적어도 하나가 $0$ 이 된다. 점 하나를 뺄 수 있으므로 $m\le d+1$ 이 될 때까지 되풀이한다.

## Tverberg 정리

**정리(Tverberg, 1966).** $\mathbb R^d$ 의 점 $(r-1)(d+1)+1$ 개는 $r$ 개의 부분으로 나누어 그 볼록 껍질들이 공통점을 갖게 할 수 있다.[^4]

$r=2$ 인 [Tverberg 정리](tverberg-theorem.md)는 점 $d+2$ 개에 대한 것이고 Radon 정리다.

# 활용

- [중심점 정리](centerpoint-theorem.md): $\mathbb R^d$ 의 점 $n$ 개에 대해, 그 점을 포함하는 모든 닫힌 반공간이 주어진 점을 $n/(d+1)$ 개 이상 포함하는 점이 존재한다. 주어진 점을 $dn/(d+1)$ 개보다 많이 포함하는 닫힌 반공간(halfspace)마다 그 안에 든 점들의 볼록 껍질을 잡으면 어느 $d+1$ 개도 공통점을 가지므로, Helly 정리를 적용해 증명한다.
- [선형계획법](linear-programming.md): $\mathbb R^d$ 의 일차 부등식 계가 해를 갖지 않으면 그 가운데 $d+1$ 개만으로 해가 없다. 반공간에 Helly 정리를 적용한 것이고, 최적해가 제약 $d$ 개로 정해진다는 조합적 차원의 근거다.
- [Krein–Milman 정리](krein-milman.md): 콤팩트 볼록집합이 극점(extreme point)의 볼록 껍질의 닫힘이라는 정리이고, 유한 차원에서는 Carathéodory 정리와 함께 각 점이 극점 $d+1$ 개 이하의 볼록 결합이라는 Minkowski 정리가 된다.

[^1]: E. Helly, *Über Mengen konvexer Körper mit gemeinschaftlichen Punkten*, Jahresber. Deutsch. Math.-Verein. **32** (1923), 175–176.
[^2]: J. Radon, *Mengen konvexer Körper, die einen gemeinsamen Punkt enthalten*, Math. Ann. **83** (1921), 113–115.
[^3]: J. Matoušek, *Lectures on Discrete Geometry*, GTM 212, Springer, 2002, 1 장. Radon, Helly, Carathéodory 정리와 중심점 정리가 여기 있다.
[^4]: H. Tverberg, *A generalization of Radon's theorem*, J. London Math. Soc. **41** (1966), 123–128.

# 연관 문서

## 선수지식

- [볼록성](convexity.md)

## 더 알아보기

- [다색 Carathéodory 정리](colorful-caratheodory.md)
- [Tverberg 정리](tverberg-theorem.md)
- [중심점 정리](centerpoint-theorem.md)

#optimization #combinatorics #analysis
