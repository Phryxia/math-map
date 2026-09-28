# 유한 Morley 위수 군

# 개요

유한 Morley 위수 군은 바탕집합의 Morley 위수가 유한한 자연수인 정의 가능 군이다. 대수군의 차원이 하던 일을 위수 하나가 대신하고, Zariski 위상 없이 부분군의 사슬과 생성 부분군을 다룰 수 있다.

대수적으로 닫힌 체 위의 대수군은 전부 이 부류에 든다. Cherlin–Zilber 추측은 역도 성립하는지, 곧 단순 무한인 것이 모두 대수군인지를 묻는다.

# 직관

## 부분군의 내림 사슬

유한군에서 부분군의 내림 사슬은 원소 개수가 줄어들어 멈춘다. 무한군에서는 개수가 줄지 않으므로 다른 값이 줄어야 한다.

$G$ 의 정의 가능한 부분군 $H$ 를 잡는다. 잉여류 $gH$ 는 $x\mapsto gx$ 로 $H$ 와 일대일 대응하고 이 대응이 정의 가능하므로 $\mathrm{rk}\thinspace gH=\mathrm{rk}\thinspace H$ 다. 잉여류들은 서로 겹치지 않는다.

잉여류가 무한히 많으면 위수 $\mathrm{rk}\thinspace H$ 인 집합이 $G$ 안에 겹치지 않게 무한히 많다. 위수는 그런 집합이 무한히 많을 때 한 단계 올라가도록 정의하므로 $\mathrm{rk}\thinspace G\ge\mathrm{rk}\thinspace H+1$ 이다. 잉여류의 개수가 무한이면 위수가 줄어든다.

잉여류가 유한개면 $G$ 가 위수 $\mathrm{rk}\thinspace H$ 인 조각 유한개의 합집합이므로 $\mathrm{rk}\thinspace G=\mathrm{rk}\thinspace H$ 다. 이때는 위수가 최대인 조각의 개수가 $\lbrack G:H\rbrack$ 배로 줄어든다. 이 개수가 Morley 정도다.

## 연결 성분

위수는 유한한 자연수이고 정도도 자연수다. 부분군을 하나 내려갈 때마다 둘 가운데 하나가 줄어들므로 정의 가능한 부분군의 내림 사슬은 유한하다.

그러므로 잉여류가 유한개인 정의 가능한 부분군 가운데 가장 작은 것이 하나 있다. 그것이 연결 성분 $G^\circ$ 이고, 대수군에서 항등원을 품은 Zariski 연결 성분이 하던 자리에 놓인다.

# 정의

## 유한 Morley 위수 군

군 $G$ 가 유한 Morley 위수 군이라 함은 $G$ 의 바탕집합의 Morley 위수가 유한한 자연수라는 것이다. 군 언어에 다른 구조가 붙어 있으면 정의 가능 집합을 그 언어 전체에서 세고, 위수도 거기서 잰다.

$\mathrm{rk}$ 는 [안정 이론](stable-theories.md)의 Morley 위수이고, 대수적으로 닫힌 체에서는 정의 가능 집합의 Zariski 닫음의 차원과 같다.

## 위수 공리

모형론의 위수 대신 다음 네 조건을 만족하는 함수 $\mathrm{rk}$ 를 공리로 두어도 같은 부류가 나온다. $\mathrm{rk}$ 는 공집합이 아닌 정의 가능 집합에 자연수를 준다.[^1]

- **단조.** $\mathrm{rk}\thinspace A\ge n+1$ 인 것과 $A$ 안에 위수 $\ge n$ 인 정의 가능 부분집합이 겹치지 않게 무한히 많은 것이 같다.
- **정의 가능성.** 정의 가능한 $f\colon A\to B$ 에 대해 $\lbrace b\in B:\mathrm{rk}\thinspace f^{-1}(b)=n\rbrace$ 이 정의 가능하다.
- **덧셈.** 정의 가능한 전사 $f\colon A\to B$ 의 모든 섬유가 위수 $n$ 이면 $\mathrm{rk}\thinspace A=\mathrm{rk}\thinspace B+n$ 이다.
- **유계.** 정의 가능한 $f\colon A\to B$ 의 섬유가 모두 유한이면 섬유의 크기에 상한이 있다.

이 공리계를 만족하는 군을 랭크된 군이라 한다. 위수의 값만 쓰는 논증은 공리계에서 그대로 돌아간다.

## Morley 정도

$\mathrm{rk}\thinspace A=n$ 일 때 $A$ 를 위수 $n$ 인 정의 가능 부분집합들로 겹치지 않게 쪼갠 조각의 최대 개수를 $A$ 의 **Morley 정도**라 한다. 유한 Morley 위수에서는 이 개수가 항상 유한하다.

## 연결 성분

$G^\circ$ 는 잉여류가 유한개인 정의 가능한 부분군 전부의 교집합이다. 내림 사슬 조건으로 이 교집합이 유한 교집합과 같으므로 $G^\circ$ 는 정의 가능하고, 잉여류가 유한개이며 정규다. $G=G^\circ$ 인 군을 **연결**이라 한다.

# 성질

## 하강 사슬 조건

**정리**(Macintyre). 유한 Morley 위수 군에서 정의 가능한 부분군의 내림 사슬은 유한하다.[^2]

증명의 요지는 직관 절의 계산이다. 부분군을 내려갈 때 위수가 줄거나, 위수가 같으면 정도가 줄고, 둘 다 자연수이므로 사슬이 멈춘다.

임의의 부분집합 $X\subseteq G$ 에 대해 중심화군 $C_G(X)$ 가 정의 가능하고, 사슬 조건으로 $C_G(X)=C_G(X_0)$ 인 유한 부분집합 $X_0$ 이 있다. 유한 생성이 아닌 군에서도 중심화군을 유한개의 원소로 잡을 수 있다.

## 불가분성 정리

$1\in X$ 인 정의 가능 집합 $X$ 가 **불가분**이라 함은, 정의 가능한 부분군 $H$ 의 잉여류 유한개가 $X$ 를 덮으면 $X\subseteq H$ 라는 것이다.

**정리**(Zilber). $\lbrace X_i\rbrace\_{i\in I}$ 가 모두 $1$ 을 품은 불가분 집합이면 이들이 생성하는 부분군 $\langle X_i:i\in I\rangle$ 는 정의 가능하고 연결이며, 유한 곱 $X\_{i_1}\cdots X\_{i_k}$ 하나와 같다.[^3]

대수군에서 기약 집합족이 생성하는 부분군이 닫힌 연결 부분군이라는 사실의 자리에 이 정리가 들어간다. 연결 군 $G$ 와 정의 가능한 부분군 $H$ 에서 교환자 집합이 불가분이므로 $\lbrack G,H\rbrack$ 가 정의 가능하고 연결이라는 결론이 여기서 나온다.

## 체의 대수적 닫힘

**정리**(Macintyre). 유한 Morley 위수의 무한 체는 대수적으로 닫혀 있다.[^2]

증명은 곱셈군에 사슬 조건을 건다. $K^\times$ 의 $n$ 제곱 원소들이 정의 가능한 부분군이고 지수 $n$ 의 사슬이 멈추므로 $K^\times$ 가 나눗셈 가능하고, 같은 논법을 덧셈 쪽 Artin–Schreier 사상에 걸어 표수 $p$ 의 확대를 막는다.

유한 Morley 위수 군 안에 해석되는 체가 나오면 그 체는 자동으로 대수적으로 닫혀 있다. 대수군을 결론으로 얻는 논증이 이 단계를 쓴다.

## 작은 위수의 분류

**정리**(Cherlin). 연결 유한 Morley 위수 군의 위수가 $1$ 이면 아벨군이고, $2$ 이면 가해군이며, $3$ 이면 가해군이거나 $\mathrm{PSL}\_2(K)$ 이거나 나쁜 군이다.[^4]

위수 $1$ 은 [강최소 군](strongly-minimal-groups.md)이므로 Reineke 정리가 아벨성을 준다. 위수 $3$ 의 세 번째 경우인 [나쁜 군](bad-groups.md)은 정의 가능한 연결 진부분군이 모두 멱영인 연결 비가해 군이다.

**정리**(Frécon). 위수 $3$ 의 나쁜 군은 없다.[^6]

따라서 위수 $3$ 의 연결 유한 Morley 위수 군은 가해군이거나 $\mathrm{PSL}\_2(K)$ 다. 위수 $3$ 을 넘는 나쁜 군이 있는지는 알려져 있지 않다.[^5]

# 활용

## Cherlin–Zilber 추측

**추측**(Cherlin–Zilber). 단순 무한 유한 Morley 위수 군은 대수적으로 닫힌 체 위의 대수군이다.[^5]

유한 단순군 분류가 Sylow $2$ 부분군의 구조로 경우를 가르듯이, 이 추측의 연구도 Sylow $2$ 부분군의 구조로 짝수형, 홀수형, 퇴화형을 가른다. 짝수형은 해결되었다.

**정리**(Altınel–Borovik–Cherlin). Sylow $2$ 부분군이 무한이고 지수가 유계인 단순 무한 유한 Morley 위수 군은 표수 $2$ 의 대수적으로 닫힌 체 위의 Chevalley 군이다.[^5]

## Zilber 삼분법의 군 단계

[군 배치 정리](group-configuration.md)는 유한 Morley 위수 이론의 배치에서 위수 $1$ 인 정의 가능 군을 해석한다. 그 군을 강최소 군으로 다루는 논증이 여기의 연결 성분과 사슬 조건 위에서 돈다.

[Zilber 삼분법](zilber-trichotomy.md)의 셋째 경우에서 나오는 체는 해석된 유한 Morley 위수 체이므로 위의 Macintyre 정리로 대수적으로 닫혀 있다.

## 안정군 이론의 기준 사례

갈래짓기 독립과 연결 성분을 쓰는 안정군의 논증은 유한 Morley 위수에서 먼저 정리되었다. 유한 Morley 위수 군의 사슬 조건은 안정군에서 타입으로 정의 가능한 부분군의 사슬 조건으로 약해지고, 연결 성분도 타입으로 정의 가능한 $G^{00}$ 으로 바뀐다.

[^1]: A. Borovik, B. Poizat, *Simple groups of finite Morley rank without nonnilpotent connected subgroups*, 1990. 공리계의 서술은 A. Borovik, A. Nesin, *Groups of Finite Morley Rank*, Oxford Logic Guides **26**, Oxford University Press (1994), 4 장.
[^2]: A. Macintyre, *On $\omega_1$-categorical theories of fields*, Fund. Math. **71** (1971), 1–25.
[^3]: B. Zilber, *Groups and rings whose theory is categorical*, Fund. Math. **95** (1977), 173–188.
[^4]: G. Cherlin, *Groups of small Morley rank*, Ann. Math. Logic **17** (1979), 1–28.
[^5]: T. Altınel, A. Borovik, G. Cherlin, *Simple Groups of Finite Morley Rank*, Math. Surveys Monogr. **145**, AMS (2008). 추측의 진술과 짝수형 정리가 서론에 있고, 나쁜 군의 존재가 미해결이라는 것도 같은 자리에 있다.
[^6]: O. Frécon, *Simple groups of Morley rank 3 are algebraic*, J. Amer. Math. Soc. **31** (2018), no. 3.

# 연관 문서

## 선수지식

- [강최소 군](strongly-minimal-groups.md)

## 더 알아보기

- [Zilber 불가분성 정리](zilber-indecomposability.md)
- [나쁜 군](bad-groups.md)

#logic #foundations #algebra #group_theory
