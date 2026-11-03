# Kan 복합체

# 개요

**Kan 복합체(Kan complex)** 는 모든 뿔이 채워지는 단순 집합이다. 원을 꼭짓점 하나와 변 하나로 적은 [단순 집합](simplicial-sets.md)에는 고리를 두 번 이은 것을 변 하나로 적어 줄 2단체가 없어서, 공간의 기본군은 $\mathbb Z$ 인데도 자료만으로는 고리를 이을 수 없다. Kan 복합체는 면 하나가 빠진 단체마다 그것을 채우는 단체가 있다고 요구해, 고리의 이어붙이기와 호모토피를 자료 안에서 계산하게 한다.

# 직관

원을 꼭짓점 하나와 변 하나로 적은 단순 집합 $X$ 에서 고리를 이어 본다. 변 $e$ 는 $v$ 에서 $v$ 로 가므로 $e$ 다음에 $e$ 를 이은 고리가 있어야 하고, 그 결과를 변 하나 $h$ 로 적으려면 면이 $d_2=e$, $d_0=e$, $d_1=h$ 인 2단체가 있어야 한다.

$X_2$ 의 원소를 전부 적어 본다. $X_0=\lbrace v\rbrace$ 이고 $X_1=\lbrace s_0v,\thinspace e\rbrace$ 이므로 2단체는 퇴화 단체 $s_0s_0v$, $s_0e$, $s_1e$ 셋뿐이다. 단체 항등식으로 면 $(d_0,d_1,d_2)$ 를 계산하면 $s_0e$ 는 $(e,e,s_0v)$ 이고 $s_1e$ 는 $(s_0v,e,e)$ 이며 $s_0s_0v$ 는 $(s_0v,s_0v,s_0v)$ 다. $d_0$ 과 $d_2$ 가 모두 $e$ 인 2단체는 없다. 그러므로 $e$ 를 두 번 이은 결과를 적을 자리가 없다.

기하적 실현은 원이고 그 기본군은 $\mathbb Z$ 이므로, 막힌 것은 공간이 아니라 자료다. 단순 집합의 정의는 면 사상과 퇴화 사상이 있다는 것만 요구하고 두 변에 2단체가 딸린다는 것은 요구하지 않는다. 그래서 요구를 추가한다. $\Delta^n$ 에서 면 하나를 뺀 뿔 $\Lambda^n_i$ 에서 $X$ 로 가는 사상마다 그것을 $\Delta^n$ 전체로 늘린 사상이 있다고 둔다.

이 요구를 만족하는 단순 집합이 Kan 복합체다. $n=2$, $i=1$ 의 경우가 두 변에 2단체를 딸리고, 높은 차수가 그 결과들 사이의 호모토피를 딸린다. 원을 이런 자료로 적으려면 꼭짓점 하나로는 안 되고, 표준 단체에서 원으로 가는 연속사상 전체를 차수마다 모아야 한다.

# 정의

## Kan 조건

단순 집합 $X$ 가 **Kan 복합체** 라는 것은 모든 $n\ge 1$ 과 모든 $0\le i\le n$ 에 대해 사상 $\Lambda^n_i\to X$ 가 $\Delta^n\to X$ 로 확장된다는 것이다. 이 확장을 뿔(horn)의 **채움(filler)** 이라 하고, 채움의 유일성은 요구하지 않는다. 직관 절의 원 $X$ 에서 $d_2=e$, $d_0=e$ 인 뿔 $\Lambda^2_1\to X$ 는 채움이 없으므로 $X$ 는 Kan 복합체가 아니다.

안쪽 뿔 $0\lt i\lt n$ 에만 같은 조건을 걸면 [무한 범주](infinity-categories.md)의 정의가 된다. Kan 조건은 바깥 뿔 $i=0$ 과 $i=n$ 까지 요구하므로 더 강하다.

## Kan 올화

단순 집합 사이의 사상 $p\colon X\to Y$ 가 **Kan 올화(Kan fibration)** 라는 것은 모든 뿔과 다음 가환 사각형마다 두 삼각형을 가환으로 만드는 사상 $\Delta^n\to X$ 가 존재한다는 것이다.

$$
\begin{matrix}
\Lambda^n_i & \to & X\cr
\downarrow & & \downarrow p\cr
\Delta^n & \to & Y
\end{matrix}
$$

$X$ 가 Kan 복합체인 것은 $X$ 에서 한 점 단순 집합 $\Delta^0$ 으로 가는 사상이 Kan 올화인 것과 같다.

## 단체 호모토피군

Kan 복합체 $X$ 와 꼭짓점 $x\in X_0$ 에 대해, $n$ 단체 가운데 모든 면이 $x$ 의 퇴화 단체인 것을 모아 $Z_n(X,x)$ 라 한다. 두 원소 $a,b$ 가 **단체 호모토피(simplicial homotopy)** 라는 것은 면 $d_n$ 과 $d_{n+1}$ 이 $a$ 와 $b$ 이고 나머지 면이 퇴화 단체인 $n+1$ 단체가 있다는 것이고, Kan 조건으로 이것은 동치관계다. 다음 몫을 **단체 [호모토피군](homotopy-groups.md)(simplicial homotopy group)** 이라 한다.

$$
\pi_n(X,x)=Z_n(X,x)/\sim
$$

군 연산은 뿔의 채움으로 정의한다. 두 원소 $a$, $b$ 를 뿔 $\Lambda^{n+1}\_i$ 의 두 면에 놓고 나머지 면을 퇴화 단체로 채운 뒤 채움의 남은 면을 곱이라 읽는다. 결합법칙과 역원은 한 차수 높은 채움에서 나온다[^1]. 위상공간 $T$ 의 특이 단순 집합 $\mathrm{Sing}\thinspace T$ 에서 $Z_n(X,x)$ 의 원소는 경계 전체를 $x$ 로 보내는 연속사상 $\vert\Delta^n\vert\to T$ 다.

# 성질

## 특이 단순 집합

위상공간 $T$ 의 특이 단순 집합 $\mathrm{Sing}\thinspace T$ 는 Kan 복합체이고, 모든 $n\ge 1$ 에서 $\pi_n(\mathrm{Sing}\thinspace T,x)\cong\pi_n(T,x)$ 다[^1].

증명의 요지는 다음이다. 뿔의 기하적 실현 $\vert\Lambda^n_i\vert$ 는 $\vert\Delta^n\vert$ 의 변형수축이므로, 뿔에서 $T$ 로 가는 연속사상을 표준 단체 전체로 확장할 수 있다. 호모토피군의 동형은 $Z_n$ 의 원소가 경계를 한 점으로 보내는 $\vert\Delta^n\vert\to T$ 이고 그것이 $S^n\to T$ 와 같다는 데서 나온다.

## 위상공간과의 대응

기하적 실현과 특이 단순 집합은 Kan 복합체의 호모토피 범주와 [CW 복합체](cw-complexes.md)(CW complex, closure-finite weak topology)의 호모토피 범주 사이의 동치를 준다[^1].

증명의 요지는 다음이다. $\vert\mathrm{Sing}\thinspace T\vert\to T$ 가 약호모토피 동치이고, Kan 복합체 $X$ 에서는 $X\to\mathrm{Sing}\thinspace\vert X\vert$ 가 단체 호모토피군의 동형을 준다. 두 사상이 호모토피 범주에서 두 함자가 서로 역임을 준다.

이 동치로 위상공간의 호모토피 불변량을 뿔의 채움만 쓰는 계산으로 바꿀 수 있다.

## 단체군

단체군(simplicial group), 곧 함자 $G\colon\Delta^{\mathrm{op}}\to\mathbf{Grp}$ 의 밑바탕 단순 집합은 Kan 복합체다[^1].

증명의 요지는 다음이다. 뿔의 면들이 주어졌을 때 채움을 차수 순서대로 군 연산으로 짜 맞춘다. 면 하나를 고르고 그것의 퇴화 단체를 곱해 다음 면을 맞추는 보정을 반복하면 유한 번에 끝난다.

그러므로 단체 아벨군은 Kan 복합체다. 단체 아벨군과 사슬 복합체 사이의 Dold–Kan 대응(Dold–Kan correspondence)에서 단체 호모토피군은 정규화 사슬 복합체의 호몰로지와 같다.

## 무한 groupoid

무한 범주 $X$ 가 Kan 복합체인 것은 호모토피 범주 $hX$ 의 모든 사상이 가역인 것과 같다. 그런 $X$ 를 무한 groupoid($\infty$-groupoid)라 한다.

바깥 뿔 $\Lambda^2_0$ 의 채움은 $f\colon x\to y$ 와 $h\colon x\to z$ 에서 $g\colon y\to z$ 를 만든다. $h=\mathrm{id}\_x$ 로 두면 $g\circ f\simeq\mathrm{id}\_x$ 인 $g$ 가 나오므로, 바깥 뿔을 요구하면 모든 사상이 가역이다.

# 활용

- 사상 공간. 무한 범주 $X$ 의 두 대상 사이의 사상 공간 $\mathrm{Map}\_X(x,y)$ 는 Kan 복합체다. 보통 범주에서 사상 집합이 놓이는 자리에 Kan 복합체가 놓인다.
- Eilenberg–MacLane 공간. 아벨군 $A$ 와 $n$ 에 대해 정규화 복합체가 $n$ 차수에만 $A$ 를 갖는 단체 아벨군을 만들면 그 실현이 [Eilenberg–MacLane 공간](eilenberg-maclane-spaces.md) $K(A,n)$ 이다.
- 호모토피 타입 이론. [호모토피 타입 이론](homotopy-type-theory.md)의 단체 모형은 타입을 Kan 복합체로, 동일성 타입을 경로 대상으로 해석한다. 일가 공리(univalence axiom)가 이 모형에서 성립한다.
- 올화의 조합적 판본. Kan 올화는 [올화](fibrations.md)의 긴 완전열을 단체 자료에서 재현한다. 올과 전체공간과 밑공간의 단체 호모토피군이 같은 모양의 완전열에 들어간다.

[^1]: P. G. Goerss and J. F. Jardine, *Simplicial Homotopy Theory*, Progress in Mathematics **174**, Birkhäuser, 1999. 단체 호모토피군은 1 장 7 절, 단체군의 Kan 조건은 1 장 3 절, 호모토피 범주의 동치는 1 장 11 절이다.

# 연관 문서

## 선수지식

- [단순 집합](simplicial-sets.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebraic_topology #topology #category_theory
