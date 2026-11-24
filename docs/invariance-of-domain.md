# 영역 불변성 정리

# 개요

**영역 불변성 정리(invariance of domain theorem)** 는 $n$ 차원 공간의 열린 집합을 같은 차원의 공간으로 단사 연속사상으로 보내면 상도 열린 집합이라는 정리다. 평면의 열린 원판을 평면 안으로 찢거나 겹치지 않고 늘이고 구부려 옮길 때, 상이 선분처럼 납작해지거나 경계를 얻어 열린 집합이 아니게 될 수 있는지가 문제다. 이 정리는 원판의 테두리 원이 옮겨진 곡선이 평면을 두 조각으로 나눈다는 사실로 원판의 상이 그 안쪽 조각 전체임을 보여, 그런 일이 없음을 증명한다.

# 직관

실수 직선의 열린 구간 $(a,b)$ 에서 단사 연속함수 $f$ 를 생각한다. [중간값 정리](intermediate-value-theorem.md)로 $f$ 는 증가하거나 감소한다. 증가하면 상의 값 $f(s)$ 마다 $a\lt s'\lt s\lt t'\lt b$ 를 잡아 $f(s')\lt f(s)\lt f(t')$ 이고, 중간값 정리로 그 사이 값이 모두 상에 들어 있으므로 $f((a,b))$ 는 열린 구간이다. 1 차원에서는 크기 순서가 상을 정한다.

평면에는 크기 순서가 없다. 열린 원판 $D$ 에서 평면으로 가는 단사 연속사상 $f$ 를 잡고, $D$ 안의 점 $x$ 를 중심으로 한 작은 닫힌 원판 $B$ 를 잡는다. $B$ 의 테두리 원 $S$ 는 $f$ 로 스스로 만나지 않는 닫힌 곡선 $f(S)$ 로 옮겨지고, [Jordan 곡선 정리](jordan-curve-theorem.md)로 $f(S)$ 는 평면을 안과 밖 두 조각으로 나눈다.

$B$ 에서 테두리를 뺀 열린 원판은 한 조각이고 $f$ 가 단사이므로 그 상은 $f(S)$ 와 만나지 않는 한 조각이다. 같은 정리의 증명에서 원판의 상 $f(B)$ 를 뺀 평면도 한 조각이다. 곡선 $f(S)$ 바깥의 평면은 이 두 조각을 합친 것이고 정확히 두 조각이므로, 열린 원판의 상이 $f(S)$ 의 안쪽 조각 전체다. 안쪽 조각은 열린 집합이므로 $f(x)$ 의 둘레가 상에 들어 있다.

# 정의

$U\subseteq\mathbb R^n$ 이 열린 집합이고 $f:U\to\mathbb R^n$ 이 연속인 단사사상이면 $f(U)$ 는 $\mathbb R^n$ 의 열린 집합이고, $f$ 는 $U$ 에서 $f(U)$ 로 가는 위상동형사상이다.

사상 $f:X\to Y$ 가 열린 집합을 열린 집합으로 보내면 **열린 사상(open map)** 이라 한다. 정리의 둘째 결론은 첫째 결론에서 나온다. $U$ 의 열린 부분집합 $V$ 에 첫째 결론을 쓰면 $f(V)$ 가 열려 있으므로 $f$ 는 열린 사상이고, 단사인 열린 연속사상의 역사상은 연속이다.

차원이 같다는 가정은 빠지지 않는다. $(x,y)\mapsto(x,y,0)$ 은 $\mathbb R^2$ 에서 $\mathbb R^3$ 으로 가는 단사 연속사상인데 상인 평면은 $\mathbb R^3$ 의 열린 집합이 아니다.

# 성질

## 증명

[Jordan 곡선 정리](jordan-curve-theorem.md)의 증명에서 얻은 두 명제를 쓴다. $\tilde H_i$ 는 축약 호몰로지다. $h:D^n\to S^n$ 이 단사 연속이면 $\tilde H_0(S^n\setminus h(D^n))=0$ 이고, $h:S^{n-1}\to S^n$ 이 단사 연속이면 $\tilde H_0(S^n\setminus h(S^{n-1}))\cong\mathbb Z$ 다. 곧 원판의 상을 뺀 $S^n$ 은 경로 연결이고, 구면의 상을 뺀 $S^n$ 은 경로 연결 성분이 정확히 둘이다[^1].

$\mathbb R^n$ 을 $S^n$ 에서 한 점을 뺀 것으로 본다. $x\in U$ 이면 $x$ 를 중심으로 하고 $U$ 에 들어 있는 닫힌 공 $B$ 를 잡고, 그 경계 구면을 $S$ 라 한다. 다음 분해가 성립한다.

$$
S^n\setminus f(S)=\bigl(S^n\setminus f(B)\bigr)\cup f(B\setminus S)
$$

$f$ 가 단사이므로 두 집합은 서로소다. 첫째는 첫 명제로 경로 연결이고, 둘째는 경로 연결인 $B\setminus S$ 의 연속상이므로 경로 연결이다. 좌변의 성분이 정확히 둘이므로 두 집합은 각각 좌변의 성분이다.

$f(S)$ 는 콤팩트하므로 좌변은 $S^n$ 의 열린 집합이고, 국소 경로 연결 공간의 열린 집합의 성분은 열린 집합이다. 그러므로 $f(B\setminus S)$ 는 $f(x)$ 를 포함하는 열린 집합이고 $f(U)$ 에 들어 있다.

$\mathbb R^n$ 에서 $\mathbb R^n$ 으로 가는 사상의 [Brouwer 차수](brouwer-degree.md)로 보이는 증명도 있다. 단사 연속사상의 국소 차수가 $0$ 이 아님을 보이고, 차수가 $0$ 이 아닌 값의 근처 값이 모두 상에 든다는 성질을 쓴다.

## 차원 불변성

$\mathbb R^m$ 과 $\mathbb R^n$ 이 위상동형이면 $m=n$ 이다. 이것을 **차원 불변성(invariance of dimension)** 이라 한다.

증명의 요지. $m\lt n$ 이고 $h:\mathbb R^n\to\mathbb R^m$ 이 위상동형사상이라 하자. $\mathbb R^m$ 을 $\mathbb R^n$ 의 처음 $m$ 개 좌표로 넣는 포함사상 $\iota$ 와 합성한 $\iota\circ h$ 는 $\mathbb R^n$ 에서 $\mathbb R^n$ 으로 가는 단사 연속사상이다. 영역 불변성으로 상 $\iota(\mathbb R^m)$ 은 $\mathbb R^n$ 에서 열려 있어야 하지만, 마지막 좌표가 $0$ 인 점들의 집합은 열린 집합이 아니다.

Cantor 는 $\mathbb R$ 에서 $\mathbb R^2$ 로 가는 전단사를 만들었고, Peano 곡선은 구간에서 정사각형으로 가는 연속 전사다. 두 사상 가운데 어느 것도 위상동형사상이 아니므로 차원 불변성과 모순되지 않는다.

## 구면의 단사 연속사상

$S^n$ 에서 $\mathbb R^n$ 으로 가는 단사 연속사상은 존재하지 않는다. 그런 사상 $f$ 가 있으면 $S^n$ 의 각 점은 $\mathbb R^n$ 의 열린 집합과 위상동형인 근방을 가지므로 영역 불변성으로 $f(S^n)$ 은 열린 집합이다. $f(S^n)$ 은 콤팩트하므로 닫힌 집합이기도 하고, $\mathbb R^n$ 이 [연결](connectedness.md)이므로 $f(S^n)=\mathbb R^n$ 이 되어 $\mathbb R^n$ 이 콤팩트해야 한다. 모순이다.

[Borsuk–Ulam 정리](borsuk-ulam.md)는 $S^n$ 에서 $\mathbb R^n$ 으로 가는 연속사상이 대척점 한 쌍을 같은 점으로 보낸다는 더 강한 결론을 준다.

## 무한 차원

무한 차원에서는 정리가 성립하지 않는다. 제곱합이 유한한 실수열의 공간 $\ell^2$ 에서 오른쪽 이동 $(x_1,x_2,\dots)\mapsto(0,x_1,x_2,\dots)$ 은 단사 연속 선형사상인데, 상은 첫 좌표가 $0$ 인 수열들이라 열린 집합이 아니다.

항등사상에 콤팩트 사상을 더한 꼴, 곧 $f=I-K$ 이고 $K$ 가 유계 집합을 상대 콤팩트 집합으로 보내는 연속사상이면 [Banach 공간](banach-spaces.md)에서도 영역 불변성이 성립한다(Schauder, 1929)[^2]. 증명은 [Leray–Schauder 차수](leray-schauder-degree.md)를 위의 Brouwer 차수 증명에 대신 쓴다.

# 활용

- 다양체의 차원. 위상 [다양체](manifolds.md)의 연결 성분 위에서 국소 좌표의 차원은 차원 불변성으로 하나로 정해진다. 경계가 있는 다양체에서 경계점과 내부점이 다르다는 것도 영역 불변성으로 증명한다. 반공간의 경계점에서는 어떤 근방도 $\mathbb R^n$ 의 열린 집합과 위상동형이 아니다.
- 다양체 사이의 사상. 차원이 같은 경계 없는 다양체 사이의 단사 연속사상은 열린 사상이다. 정의역이 콤팩트이고 공역이 연결이면 상이 열려 있고 닫혀 있으므로 그 사상은 위상동형사상이다.
- 전사성 증명. [Teichmüller 정리](teichmuller-theorem.md)에서 Bers 의 논법은 이차 미분 공간의 열린 단위공에서 차원이 같은 [Teichmüller 공간](teichmuller-space.md)으로 가는 사상 $\Phi$ 가 단사, 연속, 고유(proper)임을 보인다. 영역 불변성으로 상이 열려 있고 고유성으로 상이 닫혀 있으므로, Teichmüller 공간이 연결이라는 것과 함께 $\Phi$ 가 전사다.

[^1]: A. Hatcher, *Algebraic Topology*, Cambridge University Press, 2002, 2B 절 Proposition 2B.1 과 Theorem 2B.3.
[^2]: J. Schauder, "Invarianz des Gebietes in Funktionalräumen", Studia Mathematica 1 (1929), 123–139.

# 연관 문서

## 선수지식

- [Jordan 곡선 정리](jordan-curve-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#topology #algebraic_topology #theorem
