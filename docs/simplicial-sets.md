# 단순 집합

# 개요

**단순 집합(simplicial set)** 은 차수마다 단체의 집합을 두고 단체에서 면을 집어내는 함수를 함께 적은 자료다. 선분의 양 끝을 붙여 원을 만들면 꼭짓점 하나와 변 하나가 남는데, 변을 꼭짓점 두 개의 집합으로 적는 방식에서는 양 끝이 같은 변을 적을 수 없어 원을 세 변으로 다시 잘라야 한다. 변을 꼭짓점 집합으로 적지 않고 변에서 두 끝을 집어내는 함수만 적으면 원이 꼭짓점 하나와 변 하나로 적힌다.

# 직관

선분 $\lbrack 0,1\rbrack$ 을 [단체복합체](homology.md)(simplicial complex)로 적는다. 꼭짓점 $v_0$, $v_1$ 과 그 둘을 잇는 변 $e=\lbrace v_0,v_1\rbrace$ 세 개다. 여기서 양 끝을 붙여 원을 만들려고 한다. 붙이면 꼭짓점이 하나 남고 변은 그대로 하나이므로 자료는 꼭짓점 $v$ 하나와 변 $e$ 하나다.

그런데 단체복합체의 변은 서로 다른 꼭짓점 두 개의 집합이어야 하고, 두 단체가 만나면 공통 면에서 만나야 한다. 양 끝이 같은 $v$ 인 변은 꼭짓점 집합이 $\lbrace v\rbrace$ 한 개뿐이어서 변이 아니고, 자기 자신과 두 점에서 만난다. 붙인 결과를 단체복합체로 적으려면 원을 다시 세 꼭짓점과 세 변으로 잘라야 한다.

막힌 곳은 단체를 꼭짓점의 부분집합으로 적은 데 있다. 부분집합을 버리고, 차수마다 단체의 집합 $X_0, X_1, X_2, \dots$ 과 $n$ 단체에서 그 면인 $n-1$ 단체를 집어내는 함수만 적는다. 그러면 $X_0=\lbrace v\rbrace$, $X_1=\lbrace e\rbrace$ 로 두고 $e$ 의 두 면을 모두 $v$ 로 보내면 되고, 원의 자료는 꼭짓점 하나와 변 하나다.

면만 집어내면 꼭짓점 $v$ 를 한 자리에 머무는 변으로 보는 함수가 빠진다. 그 변은 $v$ 에서 $v$ 로 가고 면이 둘 다 $v$ 이지만 $e$ 와는 다른 것이어야 하므로, 낮은 차수의 단체를 상수로 늘려 높은 차수로 보내는 함수도 함께 적는다. 차수마다 단체의 집합을 두고 집어내는 함수와 늘리는 함수를 모두 담은 자료가 단순 집합이다.

# 정의

## 단체 범주

**단체 범주(simplex category)** $\Delta$ 는 대상이 유한 전순서집합

$$
\lbrack n\rbrack=\lbrace 0\lt 1\lt \cdots\lt n\rbrace \qquad (n\ge 0)
$$

이고 사상이 순서를 보존하는 함수인 [범주](category.md)다.

$\Delta$ 의 사상은 두 종류로 생성된다. $i$ 를 건너뛰는 단사 $\delta^i\colon\lbrack n-1\rbrack\to\lbrack n\rbrack$ 과 $i$ 와 $i+1$ 을 겹치는 전사 $\sigma^i\colon\lbrack n+1\rbrack\to\lbrack n\rbrack$ 이다. $\delta^1\colon\lbrack 1\rbrack\to\lbrack 2\rbrack$ 은 $0\mapsto 0$, $1\mapsto 2$ 이고, $\sigma^0\colon\lbrack 2\rbrack\to\lbrack 1\rbrack$ 은 $0,1\mapsto 0$, $2\mapsto 1$ 이다.

## 단순 집합

**단순 집합** 은 [함자](functors.md) $X\colon\Delta^{\mathrm{op}}\to\mathbf{Set}$ 이다. $X_n=X(\lbrack n\rbrack)$ 의 원소를 $n$ **단체(simplex)** 라 하고, 생성원이 주는 사상

$$
d_i=X(\delta^i)\colon X_n\to X_{n-1},\qquad s_i=X(\sigma^i)\colon X_n\to X_{n+1}
$$

을 각각 **면 사상(face map)** 과 **퇴화 사상(degeneracy map)** 이라 한다. $0\le i\le n$ 이다. 함자라는 조건은 이 사상들 사이의 등식으로 적힌다.

$$
d_id_j=d_{j-1}d_i\quad (i\lt j),\qquad s_is_j=s_{j+1}s_i\quad (i\le j)
$$

$$
d_is_j=s_{j-1}d_i\quad (i\lt j),\qquad d_js_j=d_{j+1}s_j=\mathrm{id},\qquad d_is_j=s_jd_{i-1}\quad (i\gt j+1)
$$

어떤 퇴화 사상의 상에 드는 단체를 **퇴화 단체(degenerate simplex)**, 그렇지 않은 것을 **비퇴화 단체(nondegenerate simplex)** 라 한다. 단순 집합 사이의 사상은 [자연변환](natural-transformations.md)이고, 성분별로 $f_n\colon X_n\to Y_n$ 이 면 사상과 퇴화 사상을 보존하는 것이다.

직관 절의 원은 $X_0=\lbrace v\rbrace$, $X_1=\lbrace e,\thinspace s_0v\rbrace$ 이고 $d_0e=d_1e=v$ 다. $s_0v$ 는 $v$ 에 머무는 변이고 $d_0s_0v=d_1s_0v=v$ 다. $X_n$ 은 $n+1$ 개의 원소를 갖지만 비퇴화 단체는 $v$ 와 $e$ 둘뿐이다.

## 표준 단체와 뿔

**표준 단체(standard simplex)** $\Delta^n$ 은 $\lbrack n\rbrack$ 이 표현하는 단순 집합 $\Delta^n_k=\Delta(\lbrack k\rbrack,\lbrack n\rbrack)$ 이다. $\Delta^1$ 의 $0$ 단체는 꼭짓점 $0$, $1$ 이고, $1$ 단체는 순서를 보존하는 함수 $\lbrack 1\rbrack\to\lbrack 1\rbrack$ 셋 $00$, $01$, $11$ 이며 그 가운데 비퇴화인 것은 $01$ 뿐이다.

$\partial\Delta^n\subset\Delta^n$ 은 전사가 아닌 사상만 모은 부분단순집합이고 **경계(boundary)** 라 한다. $i$ 번째 **뿔(horn)** $\Lambda^n_i$ 는 경계에서 $\delta^i$ 를 지나는 사상까지 뺀 것, 곧 $i$ 번째 꼭짓점을 마주보는 면을 뺀 것이다. $0\lt i\lt n$ 인 뿔을 **안쪽 뿔(inner horn)** 이라 한다. $\Lambda^2_1$ 은 변 $01$ 과 $12$ 로 된 꺾인 선이고 변 $02$ 와 $2$ 단체가 없다.

## 기하적 실현

위상공간 $\Delta^n_{\mathrm{top}}$ 을 $\mathbb R^{n+1}$ 의 표준 $n$ 단체라 한다. 단순 집합 $X$ 의 **기하적 실현(geometric realization)** 은

$$
\vert X\vert=\Bigl(\coprod_{n\ge 0} X_n\times\Delta^n_{\mathrm{top}}\Bigr)\Big/\sim
$$

이다. 각 $X_n$ 에는 이산 위상을 주고, $\sim$ 은 $\Delta$ 의 사상 $\alpha\colon\lbrack m\rbrack\to\lbrack n\rbrack$ 마다 $(X(\alpha)(x),t)$ 와 $(x,\alpha_{\mathrm{top}}(t))$ 를 같다고 보는 관계다. 직관 절의 원에서는 선분 $\lbrace e\rbrace\times\Delta^1_{\mathrm{top}}$ 의 두 끝이 $d_0e=d_1e=v$ 에 따라 한 점으로 붙고, $s_0v$ 의 선분은 그 점으로 줄어든다. 실현은 원 $S^1$ 이다.

## 특이 단순 집합과 신경

위상공간 $T$ 의 **특이 단순 집합(singular simplicial set)** $\mathrm{Sing}\thinspace T$ 는 $(\mathrm{Sing}\thinspace T)\_n=\mathrm{Hom}(\Delta^n_{\mathrm{top}},T)$ 로 둔 단순 집합이다. $0$ 단체는 $T$ 의 점이고 $1$ 단체는 $T$ 의 경로다.

범주 $\mathcal C$ 의 **신경(nerve)** $N\mathcal C$ 는 $(N\mathcal C)\_n$ 을 $\mathcal C$ 의 길이 $n$ 인 합성 가능 사슬 $c_0\to c_1\to\cdots\to c_n$ 전체로 둔 단순 집합이다. 면 사상은 사슬에서 한 자리를 빼고 이웃한 두 사상을 합성하며, 퇴화 사상은 항등사상을 끼운다. 전순서집합 $\lbrack n\rbrack$ 을 범주로 보면 $N\lbrack n\rbrack=\Delta^n$ 이다.

# 성질

## 실현의 세포 구조

$\vert X\vert$ 는 [CW 복합체](cw-complexes.md)(closure-finite weak topology)이고 세포는 $X$ 의 비퇴화 단체와 일대일로 대응한다[^1].

증명의 요지. 퇴화 단체의 점은 관계 $\sim$ 에 의해 낮은 차수의 단체의 점과 같아지므로, $\vert X\vert$ 의 $n$ 골격은 $n-1$ 골격에 비퇴화 $n$ 단체마다 $n$ 세포를 하나 붙인 것이다. 원의 실현은 비퇴화 단체 $v$, $e$ 에 따라 0 세포 하나와 1 세포 하나로 된다.

## Yoneda 대응

[Yoneda lemma](yoneda-lemma.md)에 따라 사상 $\Delta^n\to X$ 는 $n$ 단체 $X_n$ 의 원소와 일대일로 대응한다. 항등사상 $01\in\Delta^1_1$ 의 상이 대응하는 $1$ 단체다.

## 특이 단순 집합과의 수반

$\vert\cdot\vert$ 는 $\mathrm{Sing}$ 의 왼쪽 [수반](adjunctions.md)이고, 모든 $T$ 에서 사상 $\vert\mathrm{Sing}\thinspace T\vert\to T$ 가 약호모토피 동치(weak homotopy equivalence)다[^1].

증명의 요지. 수반은 실현의 몫 관계가 $\mathrm{Hom}(\vert X\vert,T)$ 를 자연변환 $X\to\mathrm{Sing}\thinspace T$ 와 짝지우는 데서 나온다. 약호모토피 동치는 두 공간의 [호모토피군](homotopy-groups.md)을 단체 사상으로 계산해 비교하는 것으로 얻는다.

$\mathrm{Sing}\thinspace T$ 의 비퇴화 단체는 차수마다 무한히 많고, 실현은 $T$ 보다 훨씬 큰 CW 복합체다. 자료의 크기는 늘지만 호모토피형은 보존된다.

## 사슬 복합체

$C_n(X)$ 를 $X_n$ 을 기저로 하는 자유 아벨군, 경계를 $\partial=\sum_i(-1)^id_i$ 로 두면 단체 항등식 $d_id_j=d_{j-1}d_i$ 에서 $\partial\partial=0$ 이 나와 [사슬 복합체](chain-complexes.md)가 된다. 퇴화 단체가 생성하는 부분복합체로 나눈 정규화 복합체(normalized chain complex)는 비퇴화 단체를 기저로 갖고 호몰로지가 같다.

이 호몰로지가 $\vert X\vert$ 의 호몰로지와 같다. $X=\mathrm{Sing}\thinspace T$ 를 넣으면 특이 호몰로지의 정의가 되고, $X$ 가 단체복합체에서 온 것이면 단체 호몰로지와 같다. 원에서 정규화 복합체는 $\mathbb Z e\to\mathbb Z v$ 이고 $\partial e=d_0e-d_1e=0$ 이므로 $H_0=H_1=\mathbb Z$ 다.

## 신경 함자

$N$ 은 범주의 범주에서 단순 집합의 범주로 가는 충실충만한 함자이고, 신경이 동형이면 범주가 동형이다. 단순 집합 $X$ 가 어떤 범주의 신경일 필요충분조건은 모든 안쪽 뿔 $\Lambda^n_i\to X$ 가 $\Delta^n\to X$ 로 유일하게 확장되는 것이다.

# 활용

- [무한 범주](infinity-categories.md)는 안쪽 뿔 $\Lambda^n_i\to X$ 가 모두 $\Delta^n\to X$ 로 확장되는 단순 집합으로 정의한다. 확장의 유일성까지 요구하면 범주의 신경만 남는다.
- 모든 뿔에서 확장이 되는 단순 집합을 [Kan 복합체](kan-complexes.md)라 하고, 그 호모토피군을 단체 사상의 호모토피류로 정의한다. 기하적 실현이 공간의 호모토피군과 이것을 맞춘다.
- 군 $G$ 를 대상 하나의 범주로 보고 신경을 취해 실현한 것이 [분류공간](classifying-spaces.md) $BG$ 다. 같은 방법이 [위상군](topological-groups.md)과 범주에도 적용된다.
- $\Delta^{\mathrm{op}}$ 에서 집합이 아닌 범주로 가는 함자를 단체 대상(simplicial object)이라 한다. 단체 아벨군은 Dold–Kan 대응(Dold–Kan correspondence)으로 차수가 $0$ 이상인 사슬 복합체와 대응하고, 단체 가환환은 유도 대수기하에서 기본 대상으로 쓰인다.

[^1]: P. G. Goerss and J. F. Jardine, *Simplicial Homotopy Theory*, Progress in Mathematics **174**, Birkhäuser, 1999. 실현과 수반은 1 장 2 절, 약호모토피 동치는 3 장 6 절이다.

# 연관 문서

## 선수지식

- [함자](functors.md)
- [CW 복합체](cw-complexes.md)

## 더 알아보기

- [무한 범주](infinity-categories.md)
- [Kan 복합체](kan-complexes.md)

#algebraic_topology #category_theory #topology #algebra
