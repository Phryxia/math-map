# 아벨 범주

# 개요

**아벨 범주(abelian category)** 는 완전열과 호몰로지를 정의할 수 있는 범주다. 영대상과 유한 쌍곱을 갖고 사상을 더할 수 있으며, 모든 사상에 핵과 여핵이 있고, 단사사상이 모두 어떤 사상의 핵이고 전사사상이 모두 어떤 사상의 여핵이다. 가군의 범주, 아벨군의 범주, 층의 범주가 이 조건을 만족한다.

# 직관

[사슬 복합체](chain-complexes.md)가 $n$ 자리에서 완전하다는 것은 $\mathrm{Im}\thinspace d_{n+1}=\ker d_n$ 이다. 여기서 상은 원소의 집합 $\lbrace d_{n+1}(x):x\in C_{n+1}\rbrace$ 로 정의했다. 층의 범주에서 같은 말을 하려면 원소를 꺼낼 수 없으므로 상을 다른 방법으로 지목해야 한다.

가군 사상 $f:M\to N$ 에서 상을 핵과 여핵만으로 찾아 본다. 여핵은 $\mathrm{coker}\thinspace f=N/\mathrm{Im}\thinspace f$ 이고, 사영 사상 $\pi:N\to N/\mathrm{Im}\thinspace f$ 의 핵은 $\mathrm{Im}\thinspace f$ 다. 그래서 $\mathrm{Im}\thinspace f=\ker(\mathrm{coker}\thinspace f\thinspace$ 로 가는 사상$)$ 이다.

핵과 여핵은 보편성질로 정의되므로 원소를 쓰지 않는다. 그러니 어떤 범주에서든 모든 사상에 핵과 여핵이 있으면 그 식을 상의 정의로 삼을 수 있다.

같은 식의 쌍대도 쓸 수 있다. $\ker f$ 의 여핵, 곧 $\mathrm{coker}(\ker f\to M)$ 를 여상이라 한다. 가군에서 여상은 $M/\ker f$ 이고 제1 동형정리가 $M/\ker f\cong\mathrm{Im}\thinspace f$ 를 준다. 원소 없이 이 동형을 얻으려면 범주에 조건이 더 필요하다. 단사사상이 모두 어떤 사상의 핵이고 전사사상이 모두 어떤 사상의 여핵이면 여상에서 상으로 가는 표준 사상이 동형이 된다.

사상을 더할 수 있고 핵과 여핵이 있고 그 표준 사상이 동형인 범주를 아벨 범주라 한다.

# 정의

## 가법 범주

가법 범주는 다음을 만족하는 범주 $\mathcal A$ 다.

- 영대상 $0$ 이 있다.
- 임의의 두 대상이 쌍곱을 갖는다.
- 각 $\mathrm{Hom}\_{\mathcal A}(X,Y)$ 가 아벨군이고 합성이 두 변수에 대해 쌍선형이다.

이 조건에서 유한 쌍곱과 유한 쌍여곱이 같은 대상이 된다.

## 아벨 범주

가법 범주 $\mathcal A$ 가 다음 셋을 만족하면 아벨 범주다.

- 모든 사상이 핵과 여핵을 갖는다.
- 모든 단사사상이 어떤 사상의 핵이다.
- 모든 전사사상이 어떤 사상의 여핵이다.

## 상과 여상

사상 $f:X\to Y$ 의 상과 여상은

$$\mathrm{im}\thinspace f=\ker(Y\to\mathrm{coker}\thinspace f),\qquad \mathrm{coim}\thinspace f=\mathrm{coker}(\ker f\to X)$$

이다. 아벨 범주에서 $f$ 는 $X\to\mathrm{coim}\thinspace f\to\mathrm{im}\thinspace f\to Y$ 로 분해된다.

## 완전열

$X\xrightarrow{\thinspace f\thinspace}Y\xrightarrow{\thinspace g\thinspace}Z$ 가 $Y$ 에서 완전하다는 것은 $\mathrm{im}\thinspace f\to Y$ 와 $\ker g\to Y$ 가 같은 부분대상을 주는 것이다.

# 성질

## 제1 동형정리

**정리.** 아벨 범주의 사상 $f$ 에 대해 표준 사상 $\mathrm{coim}\thinspace f\to\mathrm{im}\thinspace f$ 가 동형이다.

$X\to\mathrm{coim}\thinspace f$ 는 전사사상이고 $\mathrm{im}\thinspace f\to Y$ 는 단사사상이다. 둘째 조건에서 단사사상 $\mathrm{im}\thinspace f\to Y$ 가 어떤 사상의 핵이므로 $f$ 가 그 핵을 거쳐 $\mathrm{im}\thinspace f$ 로 올라가고, 셋째 조건에서 전사사상 $X\to\mathrm{coim}\thinspace f$ 가 어떤 사상의 여핵이므로 그 올라간 사상이 $\mathrm{coim}\thinspace f$ 를 지난다. 양쪽에서 얻은 두 사상이 서로 역이다. ∎

## 쌍대성

**정리.** $\mathcal A$ 가 아벨 범주이면 반대 범주 $\mathcal A^{\mathrm{op}}$ 도 아벨 범주이고, 핵과 여핵, 상과 여상, 단사사상과 전사사상이 서로 바뀐다.

가법 범주의 세 조건이 반대 범주에서 그대로 성립하고, 아벨 범주의 뒤 두 조건이 서로의 쌍대다. ∎

그래서 아벨 범주에서 증명한 명제의 쌍대는 따로 증명하지 않아도 성립한다.

## Freyd-Mitchell 매장정리

**정리.** 작은 아벨 범주 $\mathcal A$ 에 대해 환 $R$ 과 완전 충만한 완전 함자 $\mathcal A\to R\text{-}\mathbf{Mod}$ 가 있다.

이 함자가 핵, 여핵, 완전열을 보존하고 반사하므로, 유한 개의 대상과 사상만 쓰는 가환도 명제는 가군 범주에서 원소를 써서 증명하면 된다. 뱀 보조정리와 다섯 보조정리를 아벨 범주에서 쓰는 근거가 이 정리다. ∎

## 예

- 아벨군의 범주와 환 $R$ 위의 가군 범주.
- $R$ 가 [Noether 환](noetherian-rings.md)일 때 유한생성 $R$ 가군의 범주.
- 위상공간 $X$ 위의 아벨군 층의 범주. 층의 여핵은 몫층의 층화로 얻는다.
- 아벨 범주 $\mathcal A$ 에 대해 사슬 복합체의 범주와 함자 범주 $\mathcal A^{\mathcal C}$.

## 아벨 범주가 아닌 예

- 자유 아벨군의 범주. $\mathbb Z\xrightarrow{\thinspace 2\thinspace}\mathbb Z$ 의 여핵 $\mathbb Z/2$ 가 범주 안에 없다.
- 꼬임 없는 아벨군의 범주. 같은 사상의 여핵이 범주 안에 없다.
- Hausdorff 위상 아벨군의 범주. 상이 닫히지 않은 연속 단사준동형은 단사사상이지만 어떤 사상의 핵이 아니다.

# 활용

- [사슬 복합체](chain-complexes.md)와 호몰로지의 정의를 아벨 범주에서 세우면 가군, 아벨군, 층에 같은 정의가 적용된다.
- [유도 함자](derived-functors.md)는 아벨 범주 사이의 가법 함자에 대해 정의된다. 층의 범주에는 사영 대상이 모자라므로 단사 분해를 쓴다.
- [층 코호몰로지](sheaf-cohomology.md)는 층의 범주가 아벨 범주라는 것과 단사 분해의 존재를 써서 전역 절단 함자의 오른쪽 유도 함자로 정의된다.
- [무한 범주](infinity-categories.md)의 안정 대상 이론은 호모토피 범주가 아벨 범주의 조건 대신 삼각 구조를 갖는 경우를 다룬다.

# 연관 문서

## 선수지식

- [사슬 복합체](chain-complexes.md)
- [극한과 쌍대극한](limits-colimits.md)

## 더 알아보기

- [유도 범주](derived-categories.md)

#category_theory #algebra #ring_theory #algebraic_topology
